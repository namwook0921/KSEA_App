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


// const fs = require('fs');

// // Function to save login information to a text file
// function saveFile(filename, loginInfo) {
//   const { username, password } = loginInfo;
//   const data = `${username}:${password}\n`;

//   try {
//     fs.appendFileSync(filename, data);
//     console.log('Login information saved to file successfully');
//   } catch (error) {
//     console.error('Error saving login information:', error);
//   }
// }

// // Function to load login information from a text file
// function loadFile(filename) {
//   try {
//     const data = fs.readFileSync(filename, 'utf8');
//     const lines = data.split('\n').filter(line => line.trim() !== '');
//     const loginDatabase = {};

//     lines.forEach(line => {
//       const [username, password] = line.split(':');
//       loginDatabase[username] = password;
//     });

//     return loginDatabase;
//   } catch (error) {
//     console.error('Error loading login information:', error);
//     return null;
//   }
// }

// // Example usage:
// const filename = 'loginDatabase.txt';
// const newLoginInfo = { username: 'user1', password: 'password1' };

// // Save new login information
// saveFile(filename, newLoginInfo);

// // Load login information
// const loginDatabase = loadFile(filename);
// console.log('Login Database:', loginDatabase);
