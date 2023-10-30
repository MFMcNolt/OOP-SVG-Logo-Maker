const fs = require('fs');
const { prompt } = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

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
            const circle = new Circle(userInput);
            svgString = circle.generateSvgString();
            break;

        case 'triangle':
            const triangle = new Triangle(userInput);
            svgString = triangle.generateSvgString();
            break;

        case 'square':
            const square = new Square(userInput);
            svgString = square.generateSvgString();
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