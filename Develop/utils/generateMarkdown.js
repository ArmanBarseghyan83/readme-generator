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

// Function that returns the license section of README
function renderLicenseSection(license) {
  const title = '## License\n';
  const notice = `### This application is covered under ${license} license\n`;
  const link = `- Go to ${renderLicenseLink(license)}\n`;

  return title + notice + link;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const title = data.title ? `# ${data.title}\n` : '';
  const description = data.description ? `## Description\n${data.description}\n` : '';
  const installation = data.installation ? `## Installation\n${data.installation}\n` : '';
  const usage = data.usage ? `## Usage\n${data.usage}\n` : '';
  const contribution = data.contribution ? `## Contributing\n${data.contribution}\n` : '';
  const test = data.test ? `## Tests\n${data.test}\n` : '';
  const badge = data.license !== 'No License' ? renderLicenseBadge(data.license) : '';
  const license = data.license !== 'No License' ? renderLicenseSection(data.license) : '';

  const gitHubLink = data.username ? `- GitHub Profile - [https://github.com/${data.username}](https://github.com/${data.username})` : '';
  const email = data.email ? `- Email Address - [${data.email}](mailto:${data.email})` : '';
  const questionsTitle = 'Use the links below if you have any questions.';
  const questions = data.email || data.username ? `## Questions\n### ${questionsTitle}\n${gitHubLink}\n${email}` : '';

  const contentsList = [];
  data.description && contentsList.push('- [Description](#description)\n');
  data.installation && contentsList.push('- [Instalation](#installation)\n');
  data.usage && contentsList.push('- [Usage](#usage)\n');
  data.license !== 'No License' && contentsList.push('- [License](#license)\n');
  data.contribution && contentsList.push('- [Contributing](#contributing)\n');
  data.test && contentsList.push('- [Tests](#tests)\n');
  questions && contentsList.push('- [Questions](#questions)\n');

  const contents = `## Table of Contents\n${contentsList.join('')}\n`;

  const markdown = title + badge + description + contents + installation + usage + license + contribution + test + questions;

  return markdown;
}

module.exports = generateMarkdown;
