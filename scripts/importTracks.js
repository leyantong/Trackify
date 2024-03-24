import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import xlsx from "xlsx";
import connectDB from "../database.js";
import { Contract } from "../models/contract.js";
import { Track } from "../models/track.js";

const importTracks = async (filePath) => {
  await connectDB();

  let contract = await Contract.findOne({ name: "Contract 1" });
  if (!contract) {
    contract = new Contract({ name: "Contract 1" });
    await contract.save();
  }

  // Load and read the Excel file
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  const errorLog = [];

  // Process each track
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const { Title, Version, Artist, ISRC, "P Line": PLine, Aliases, Contract: contractName } = item;
    if (!Title || !ISRC) {
      if (ISRC === "Any dashes, spaces or other characters will be stripped out on import") {
        continue;
      }
      const errorMessage = `Missing required fields for track at line ${i + 2}: ${JSON.stringify(item)}`;
      console.error(errorMessage);
      errorLog.push(errorMessage);
      continue;
    }

    const aliasesArray = Aliases ? Aliases.split(";").map((alias) => alias.trim()) : [];
    const strippedISRC = ISRC.replace(/[\W_]+/g, "");
    // Initialize contract ID to null
    let contractId = null;

    // If Contract field is provided in the spreadsheet
    if (contractName) {
      // Find the contract by name
      contract = await Contract.findOne({ name: contractName });

      // If contract is found, set contract ID
      if (contract) {
        contractId = contract._id;
      } else {
        // If contract is not found, log error and continue to next track
        const errorMessage = `Contract named '${contractName}' not found at line ${i + 2}.`;
        console.error(errorMessage);
        errorLog.push(errorMessage);
        continue;
      }
    } else {
      // If no Contract field provided, use the existing contract (Contract 1)
      contractId = contract._id;
    }

    const track = new Track({
      title: Title,
      version: Version || "",
      artist: Artist || "",
      isrc: strippedISRC,
      pLine: PLine || "",
      aliases: aliasesArray,
      contract: contractId,
    });

    try {
      await track.save();
      console.log(`Track ${Title} imported successfully.`);
    } catch (error) {
      const errorMessage = `Failed to save track ${Title} at line ${i + 2}. Error: ${error.message}`;
      console.error(errorMessage);
      errorLog.push(errorMessage);
    }
  }

  if (errorLog.length > 0) {
    console.log("Some errors occurred during import:");
    errorLog.forEach((err) => console.log(err));
  } else {
    console.log("All tracks have been imported successfully.");
  }
};

export default importTracks;
