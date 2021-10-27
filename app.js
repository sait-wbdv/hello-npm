// Dependency
const _ = require('lodash')

// Create example email array
const emails = [
  `some-nerd@example.com`,
  `some-nerd@example.com`,
  `another-nerd@example.com`,
  `yet-another-nerd@example.com`
];

// Remove duplicates
const uniqEmails = _.uniq(emails)

console.log(uniqEmails)