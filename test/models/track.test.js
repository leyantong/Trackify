import mongoose from "mongoose";
import { expect } from "chai";
import { Track } from "../../models/track.js";
import connectDB from "../../database.js";

describe("Track model", () => {
  before(async () => {
    await connectDB();
  });

  after(async () => {
    await mongoose.disconnect();
  });

  it("should validate required fields", async () => {
    const track = new Track({});
    try {
      await track.validate();
    } catch (error) {
      expect(error.errors.title).to.exist;
      expect(error.errors.isrc).to.exist;
    }
  });
});
