//File Utilities
//read, write, save, load from file

import * as FileSystem from 'expo-file-system';

// Function to read data from a file
export async function readFile(filename) {
  try {
    const fileUri = FileSystem.documentDirectory + filename;
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    
    if (!fileInfo.exists) {
      console.error('File not found:', filename);
      return null;
    }

    const contents = await FileSystem.readAsStringAsync(fileUri);
    return contents;
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}

// Function to write data to a file
export async function writeFile(filename, data) {
  try {
    const fileUri = FileSystem.documentDirectory + filename;
    await FileSystem.writeAsStringAsync(fileUri, data);
    console.log('Data written to file successfully');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Function to save login information to a file
export async function saveFile(filename, loginInfo) {
  try {
    const fileUri = FileSystem.documentDirectory + filename;
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(loginInfo));
    console.log('Login information saved to file successfully');
  } catch (error) {
    console.error('Error saving login information:', error);
  }
}

// Function to load login information from a file
export async function loadFile(filename) {
  try {
    const fileUri = FileSystem.documentDirectory + filename;
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    
    if (!fileInfo.exists) {
      console.error('File not found:', filename);
      return null;
    }

    const contents = await FileSystem.readAsStringAsync(fileUri);
    return JSON.parse(contents);
  } catch (error) {
    console.error('Error loading login information:', error);
    return null;
  }
}

// Function to parse a text file
export async function parseTextFile(filename) {
  // Create a new FileReader object
  var reader = new FileReader();

  // Define a callback function to handle the file reading
  reader.onload = function(event) {
    // Access the file contents
    var contents = event.target.result;

    // Split the contents into rows by newline character ("\n")
    var rows = contents.split('\n');

    // Iterate over each row
    rows.forEach(function(row) {
        // Split the row into words by space character (" ")
        var words = row.split(' ');
        console.log("Words in row:", words);
      });
    };
    reader.readAsText(file);
}
