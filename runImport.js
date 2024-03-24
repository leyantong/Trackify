import importTracks from './scripts/importTracks.js'; // Adjust the path to where your importTracks function is located

const filePath = './Track Import Test.xlsx'; // Adjust this path to your Excel file

importTracks(filePath)
  .then(() => console.log('Import completed successfully.'))
  .catch(error => console.error('Import failed:', error));
