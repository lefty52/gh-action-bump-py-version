    // const fs = require('fs');
    // const toml = require('toml');

    // module.exports = function readPyprojectToml(filePath) {
    //   try {
    //     const fileContent = fs.readFileSync(filePath, 'utf8');
    //     const parsedToml = toml.parse(fileContent);
    //     return parsedToml;
    //   } catch (error) {
    //     console.error(`Error reading or parsing pyproject.toml: ${error.message}`);
    //     return null;
    //   }
    // }


    // module.exports = async function readPyprojectTomlA(filePath) {
    //     try {
    //         const data = fs.readFileSync(filePath, 'utf8');
    //         const parsedToml = toml.parse(data);
    //         console.log('Parsed pyproject.toml:', parsedToml);
    //     } catch (err) {
    //         console.error('Error reading or parsing file:', err);
    //     }
    // }

    // // Example usage:
    // const projectConfig = readPyprojectToml('path/to/your/pyproject.toml');

    // if (projectConfig) {
    //   console.log('Parsed pyproject.toml:', projectConfig);
    //   // Access specific sections, e.g., project name:
    //   // console.log('Project name:', projectConfig.project.name);
    // }

import { parse, stringify } from 'smol-toml';
import fs from 'fs';

// Example TOML string
const tomlString = `
title = "My Awesome Project"

[database]
server = "localhost"
ports = [8001, 8002]
enabled = true

[owner]
name = "Jane Doe"
dob = 1990-01-01T12:00:00Z
`;

// Parse the TOML string into a JavaScript object
// const parsedObject = parse(tomlString);
// console.log('Parsed Object:', parsedObject);
// console.log('Parsed Object:', parsedObject.database);
let pathToPyproject = '/home/winton/VSCode/gh-action-bump-py-version/pyproject.toml';

if (!fs.existsSync(pathToPyproject)) throw new Error(pyprojectTOMLFileName + " could not be found in your project's root.");
    console.log('pathToPyproject:', pathToPyproject);
    try {
      const fileContent = fs.readFileSync(pathToPyproject, 'utf8');
      const parsedToml = parse(fileContent);
      console.log('parsedToml:', parsedToml);
      console.log('fileContent project:', parsedToml.project);
      console.log('fileContent.project.version:', parsedToml.project.version);
      

//     // return parsedToml;
  } catch (error) {
    console.error(`Error reading or parsing pyproject.toml: ${error.message}`);
    // return null;
  }
    // Parse the TOML string into a JavaScript object
    // const parsedObject = parse(pathToPyproject);
    // console.log('Parsed Object:', parsedObject);
