// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "Creative Commons"){
    return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)"
  }
  if(license == "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if(license == "(ISC)"){
    return " [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license){
if(license == "Creative Commons"){
  return "https://creativecommons.org/licenses/by/4.0/"
}
if(license == "IBM"){
  return "https://opensource.org/licenses/IPL-1.0"
}
if(license == "(ISC)"){
  return "https://opensource.org/licenses/ISC"
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${license} -${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Description 
  ${answers.description}
  
  ${renderLicenseSection(answers.license)}

  ## Installation Instructions
  ${answers.installation}
  
  ## Contribution Guidelines
  ${answers.contribution}

  ## Usage Information
  ${answers.usage}
  
  ## Test Instructions
  ${answers.test}`;
}

module.exports = generateMarkdown;
