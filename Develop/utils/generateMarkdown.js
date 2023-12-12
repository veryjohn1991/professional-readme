// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license !== 'NONE') 
{
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
function getLicenseLink(license) {
  if (license !== 'NONE') {
    return `https://github.com/licenses/${license}`;
  }
  
  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ##for question
  ${github-link}
`;
}

module.exports = generateMarkdown;
