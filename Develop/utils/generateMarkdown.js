// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  
  1. [Description](#description)
  2. [Contribution](#how-to-contribute) 
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Tests](#tests)
  7. [Contact-information](#contact-information)
  
  
  ## Description
  ${ data.description }

  ## Installation
  ${ data.installation }

  ## Usage
  ${ data.usage }
  
  ## How to Contribute
  ${ data.contribution }

  ## Tests
  ${ data.test }
  
  
  ## License
  ${ data.license }
  
  
  ### Contact-Information

[Github Profile](https://github.com/hassanmahdi58/${data.username})
${data.email}
`;
}


module.exports = generateMarkdown;
