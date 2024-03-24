## Trackify

### Overview

Trackify is a Node.js script designed to streamline the process of ingesting data from a spreadsheet into a MongoDB database. It offers a structured solution that adheres to the outlined requirements, ensuring efficient data management and validation.

### Key Features

- **MongoDB Integration**: Utilizes Mongoose to establish a connection with MongoDB, facilitating seamless data storage and retrieval.
- **Model Definition**: Defines Mongoose models for tracks and contracts based on the specified fields provided in the `Models and Fields.xlsx` spreadsheet.
- **Data Parsing**: Parses the provided spreadsheet (`Track Import Test.xlsx`) to extract relevant information for import.
- **Data Transformation**: Splits aliases on semi-colons and handles contract associations according to defined rules.
- **Error Handling**: Identifies and logs errors encountered during the import process, providing line numbers and specific issues for easy troubleshooting.
- **Testing Framework**: Employs Mocha as the testing framework along with Chai for assertions to ensure script functionality and reliability.
- **Clear Project Structure**: Organizes files and directories in a logical manner to enhance code readability and maintainability.

### Project Structure

```
.
├── database.js
├── models
│   ├── contract.js
│   └── track.js
├── runImport.js
├── scripts
│   └── importTracks.js
└── test
    ├── scripts
    │   └── importTracks.test.js
    └── models
        └── track.test.js
├── README.md
├── Models and Fields.xlsx
├── Track Import Test.xlsx
├── package.json
├── package-lock.json
```

### File Descriptions

- **database.js**: Module responsible for establishing a connection with the MongoDB database.
- **models**: Directory housing Mongoose models for tracks and contracts.
  - **contract.js**: Defines the schema and model for contracts.
  - **track.js**: Defines the schema and model for tracks.
- **package.json**: Configuration file specifying project dependencies and scripts.
- **package-lock.json**: Auto-generated file detailing the exact dependency tree.
- **runImport.js**: Entry point for executing the data import process.
- **scripts**: Directory containing scripts related to data import.
  - **importTracks.js**: Script responsible for parsing the spreadsheet and importing data into the database.
- **test**: Directory containing test files for script validation.
  - **scripts**: Directory housing tests for data import scripts.
    - **importTracks.test.js**: Test suite validating the functionality of the `importTracks` script.
  - **models**: Directory containing tests for Mongoose models.
    - **track.test.js**: Test suite verifying the integrity of the track model.
- **Models and Fields.xlsx**: Spreadsheet containing the fields required for defining Mongoose models.
- **Track Import Test.xlsx**: Sample spreadsheet used for testing the import process.

### Installation and Usage

1. **Clone Repository**: Clone the repository to your local machine using the command `git clone https://github.com/your-username/track-importer.git`.
2. **Navigate to Directory**: Access the project directory by running `cd track-importer`.
3. **Install Dependencies**: Install project dependencies by executing `npm install`.
4. **Set Environment Variables**: Create a `.env` file in the root directory and specify the MongoDB connection string as `DB_CONNECTION=your_mongodb_connection_string`.
5. **Install Development Dependencies**: Install additional development dependencies required for testing by running `npm install --save-dev @babel/register mocha chai sinon xlsx`.
6. **Run Tests**: Execute tests using the command `npx mocha --require @babel/register ./test/scripts/importTracks.test.js`.
7. **Run Import Process**: Initiate the import process with `node runImport.js`.
8. **Monitor Output**: Monitor the console for any errors or logs generated during the import process.

### Dependencies

*   **@babel/register**: Enables the use of ES modules in Node.js.
*   **mocha**: Testing framework.
*   **chai**: Assertion library.
*   **sinon**: Test spies, stubs, and mocks.
