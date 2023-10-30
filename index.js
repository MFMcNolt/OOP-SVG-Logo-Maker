const fs = require('fs');
const { prompt } = require('inquirer');

async function generateLogo() {
  // Prompt the user for input
  const userInput = await prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (input) => input.length <= 3, // Validate input length
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  // Generate SVG markup based on user input
  let svgString;

  switch (userInput.shape) {
    case 'circle':
      svgString = `<svg width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${userInput.shapeColor}" />
        <text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>
      </svg>`;
      break;

    case 'triangle':
      svgString = `<svg width="300" height="200">
        <polygon points="150,50 100,150 200,150" fill="${userInput.shapeColor}" />
        <text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>
      </svg>`;
      break;

    case 'square':
      svgString = `<svg width="300" height="200">
        <rect x="100" y="50" width="100" height="100" fill="${userInput.shapeColor}" />
        <text x="150" y="100" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>
      </svg>`;
      break;

    default:
      console.error('Invalid shape');
      return;
  }

  // Save the SVG to a file
  const fileName = 'logo.svg';

  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.error('Error saving SVG:', err);
    } else {
      console.log('Generated', fileName);
    }
  });
}

// Run the logo generation function
generateLogo();
