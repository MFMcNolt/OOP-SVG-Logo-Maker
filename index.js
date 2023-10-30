const fs = require('fs');
const inquirer = require('inquirer');
const { Svg, Rect, Circle, Text } = require('svg-builder');

async function generateLogo() {
  // Prompt the user for input
  const userInput = await inquirer.prompt([
    {
      type: 'list',
      name: 'color',
      message: 'Select a color:',
      choices: ['red', 'green', 'blue'],
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'rectangle'],
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo:',
    },
  ]);

  // Generate SVG markup based on user input
  let shape;
  if (userInput.shape === 'circle') {
    shape = new Circle({ cx: 50, cy: 50, r: 40, fill: userInput.color });
  } else {
    shape = new Rect({ x: 10, y: 10, width: 80, height: 80, fill: userInput.color });
  }

  const text = new Text({ x: 50, y: 50, text: userInput.text, fill: 'white', 'text-anchor': 'middle' });

  const svg = new Svg({ width: 100, height: 100 });
  svg.append(shape).append(text);

  // Save the SVG to a file
  const svgString = svg.toString();
  const fileName = 'logo.svg';

  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.error('Error saving SVG:', err);
    } else {
      console.log(`Logo saved as ${fileName}`);
    }
  });
}

// Run the logo generation function
generateLogo();
