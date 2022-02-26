// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return ('http://img.shields.io/badge/license-${data.license}-red.svg')
  } else {
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ) {
    return `This project uses the ${license} license.`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-red.svg)
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [contact](#contact)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ## License 
  This project is license under ${data.license}
  ## Contributing 
  ${data.contributors}
  ## Test
  ${data.test}
  ## contact
  contact me  ${data.email}. also you can visit mt Github Project at https://github.com/${data.github}.
`;
}



module.exports = generateMarkdown;