# Trackify
Trackify is a tool designed to import track data from Excel files into a MongoDB database. It is built with Node.js and MongoDB, and it provides a convenient way to import track information such as title, artist, ISRC, and more from Excel spreadsheets.

## Features

- Import track data from Excel files into MongoDB
- Handle required fields and error logging
- Support for associating tracks with contracts

## Directory Structure

```
.
├── database.js
├── models
│   ├── contract.js
│   └── track.js
├── scripts
│   └── importTracks.js
└── test
    ├── models
    │   └── track.test.js
    └── scripts
        └── importTracks.test.js
├── runImport.js
├── package-lock.json
├── package.json
├── Models and Fields.xlsx
├── Track Import Test.xlsx
├── README.md
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Trackify.git
   ```

2. Install dependencies:

   ```bash
   cd Trackify
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DB_CONNECTION=your_mongodb_connection_string
   ```

## Usage

1. Prepare your Excel file:

   Ensure your Excel file has the following columns: Title, Version, Artist, ISRC, PLine, Aliases. Save the file in the desired location.

2. Run the importer:

   ```bash
   node runImport.js
   ```

3. Monitor the import:

   The importer will log the progress of the import process, including any errors encountered during the import.

4. Verify the imported data:

   Once the import process is complete, you can verify the imported data in your MongoDB database.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
