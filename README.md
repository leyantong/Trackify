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

Certainly! Here's how you can include instructions for creating a MongoDB database:

---

## Installation

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/Trackify.git
```

### 2. Navigate to the Project Directory

Navigate into the project directory:

```bash
cd Trackify
```

### 3. Install Node.js and npm

Ensure you have Node.js and npm installed on your system. You can download and install them from the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/)

### 4. Install MongoDB

#### macOS

If you're using macOS, you can install MongoDB using Homebrew:

```bash
brew tap mongodb/brew
brew install mongodb-community
```

After installation, start the MongoDB service:

```bash
brew services start mongodb/brew/mongodb-community
```

#### Windows

For Windows users, MongoDB provides an installer package. Download and install MongoDB from the official MongoDB website: [MongoDB Downloads](https://www.mongodb.com/try/download/community)

Follow the installation wizard instructions to complete the installation.

#### Linux

For Linux users, MongoDB provides installation instructions based on your Linux distribution. You can find detailed instructions on the official MongoDB website: [MongoDB Installation](https://docs.mongodb.com/manual/administration/install-on-linux/)

### 5. Install Project Dependencies

Use npm to install all the required dependencies listed in the `package.json` file:

```bash
npm install
```

### 6. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
DB_CONNECTION=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### 7. Create a MongoDB Database

You can create a MongoDB database using the `mongo` shell. Here are the commands to create a database and switch to it:

```bash
# Start the MongoDB shell
mongo

# Create a new database
use track_import_db
```

Replace `track_import_db` with the name you want for your database.

### 8. Install Additional Dependencies

If there are any additional dependencies required for development or testing, you can install them using npm. For example:

```bash
npm install --save-dev @babel/register mocha chai sinon
```

This command installs Babel for ES module support, Mocha for testing, Chai for assertions, and Sinon for test doubles.

