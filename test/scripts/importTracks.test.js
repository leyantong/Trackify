import { expect } from "chai";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "../../database.js"; 
import { Contract } from "../../models/contract.js"; 
import { Track } from "../../models/track.js"; 
import importTracks from "../../scripts/importTracks.js";

describe("importTracks functionality", function () {
  this.timeout(10000);

  before(async function () {
    await connectDB(); 
    await Contract.deleteMany({});
    await Track.deleteMany({});
  });

  after(async function () {
    await mongoose.disconnect();
  });

  it("should import tracks correctly from the Excel file './Track Import Test.xlsx'", async function() {
    const filePath = './Track Import Test.xlsx';
    await importTracks(filePath);
  
    const contractExists = await Contract.findOne({ name: "Contract 1" });
    expect(contractExists).to.not.be.null;
  
    // Check if tracks have been imported
    const tracks = await Track.find({});
    expect(tracks.length).to.be.greaterThan(0);

    // Verify the details of imported tracks
    const track1 = await Track.findOne({ isrc: "ISRC1" });
    expect(track1).to.not.be.null;
    expect(track1.title).to.equal("Track 1");
    expect(track1.version).to.equal("Version 1");
    expect(track1.artist).to.equal("Artist 1");
    expect(track1.aliases).to.deep.equal(["aliases1", "aliases2"]);
    expect(track1.contract).to.deep.equal(contractExists._id);
  });


});

