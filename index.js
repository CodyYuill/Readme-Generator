const inquirer = require("inquirer");
const fs = require("fs");

const licenses = 
["MIT License", 
"Apache license 2.0", 
"GNU General Public License v3.0", 
'BSD 2-Clause "Simplified" License', 
'BSD 3-Clause "New" or "Revised" License',
"Boost Software License 1.0",
"Creative Commons Zero v1.0 Universal",
"Eclipse public License 2.0",
"GNU Affero General Public License v3.0",
"GNU General Public License v2.0",
"GNU Lesser General Public License v2.1",
"Mozilla Public License 2.0",
"The Unilicense",
"None"
];

inquirer    
    .prompt([
        {
            type: "input",
            message: "Project Title: ",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Project Description: ",
            name: "description"
        },
        {
            type: "input",
            message: "Installation Instructions: ",
            name: "installation"
        },
        {
            type: "input",
            message: "Usage Information: ",
            name: "usage"
        },
        {
            type: "input",
            message: "Contribution Guidelines: ",
            name: "contributing"
        },
        {
            type: "input",
            message: "Test Instructions: ",
            name: "tests"
        },
        {
            type: "list",
            message: "Pick a License: ",
            name: "license",
            choices: licenses
        },
        {
            type: "input",
            message: "Questions: ",
            name: "questions"
        },
    ]).then(data =>{
        fs.writeFile('readme.md', 
            `# ${data.projectTitle}
            
${licenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

## License
${data.license == "None" ? '' : data.license}

`, 
            (err) => err ? console.error(err) : console.log('Success! Readme Genereated!')
        );
    });

    function licenseBadge(license)
    {
        switch(license) {
            case ("MIT License"):
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            case("Apache license 2.0"):
                return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            case("GNU General Public License v3.0"):
                return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            case('BSD 2-Clause "Simplified" License'):
                return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
            case('BSD 3-Clause "New" or "Revised" License'):
                return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            case("Boost Software License 1.0"):
                return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            case("Creative Commons Zero v1.0 Universal"):
                return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
            case("Eclipse public License 2.0"):
                return "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
            case("GNU Affero General Public License v3.0"):
                return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            case("GNU General Public License v2.0"):
                return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            case("GNU Lesser General Public License v2.1"):
                return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
            case("Mozilla Public License 2.0"):
                return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            case("The Unilicense"):
                return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            default:
              return;
          }
    }
