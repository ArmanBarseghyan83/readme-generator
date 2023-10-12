// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const params = license.replaceAll(' ', '%20');
  return `![License: ${license}](https://img.shields.io/badge/License-${params}-blue.svg)\n`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  let params = '';
  if (license === 'GNU AGPLv3') params = 'agpl-3.0';
  if (license === 'Boost Software 1.0') params = 'bsl-1.0';
  if (license === 'Mozilla Public 2.0') params = 'mpl-2.0';
  if (license === 'Apache 2.0') params = 'apache-2.0';
  if (license === 'MIT') params = 'mit';

  return `[${license}](https://choosealicense.com/licenses/${params}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const title = '## License\n';
  const notice = `### This application is covered under ${license} license\n`;
  const link = `- Go to ${renderLicenseLink(license)}\n`;

  return title + notice + link;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

`;
}

module.exports = generateMarkdown;
