export const FILE_PATH = "src/loginDatabase.txt";

import * as FileSystem from "expo-file-system";

//File Utilities
//read, write, save, load from file
//additionally, parse, and insert tokens to the local Database

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

export async function insertNewData(filename, newData) {
  try {
    const existingData = await loadFile(filename);

    if (existingData) {
      existingData.push(newData);
    } else {
      existingData = [newData];
    }

    await saveFile(filename, existingData);
    console.log('New data inserted successfully');
  } catch (error) {
    console.error('Error inserting new data:', error);
  }
}

export async function readTextFromFile(filename) {
  try {
      const fileUri = FileSystem.documentDirectory + FILE_PATH;
      const fileInfo = await FileSystem.getInfoAsync(fileUri);

      if (!fileInfo.exists) {
        console.error('File not found:', FILE_PATH);
        return null;
      }
      const fileContents = await readFile(fileUri);
      return contents
  } catch (error) {
      console.error('Error reading text from file:', error);
  }
}

export async function readAndParseTextFromFile(filename) {
  try {
      const fileUri = FileSystem.documentDirectory + FILE_PATH;
      const fileInfo = await FileSystem.getInfoAsync(fileUri);

      if (!fileInfo.exists) {
        console.error('File not found:', FILE_PATH);
        return null;
      }
      const text = await readTextFromFile(fileUri);
      return parseText(text);
  } catch (error) {
      console.error('Error reading or parsing text from file:', error);
      return null;
  }
}

// Function to parse a text file
export function parseText(text) {
  const rows = text.split("\n");
  const parsed = [];
  rows.forEach(row => {
    const words = rows.split(" ");
    parsed.push(words);
  });
  return parsed;
}
