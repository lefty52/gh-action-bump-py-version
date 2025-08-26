    const fs = require('fs');
    const toml = require('toml');

    module.exports = function readPyprojectToml(filePath) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const parsedToml = toml.parse(fileContent);
        return parsedToml;
      } catch (error) {
        console.error(`Error reading or parsing pyproject.toml: ${error.message}`);
        return null;
      }
    }


    module.exports = async function readPyprojectTomlA(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsedToml = toml.parse(data);
            console.log('Parsed pyproject.toml:', parsedToml);
        } catch (err) {
            console.error('Error reading or parsing file:', err);
        }
    }

    // // Example usage:
    // const projectConfig = readPyprojectToml('path/to/your/pyproject.toml');

    // if (projectConfig) {
    //   console.log('Parsed pyproject.toml:', projectConfig);
    //   // Access specific sections, e.g., project name:
    //   // console.log('Project name:', projectConfig.project.name);
    // }