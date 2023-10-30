# OOP-SVG-Logo-Maker

## Description
This project is an Object-Oriented Programming (OOP) SVG Logo Maker, implemented as a Node.js command-line application. The primary goal is to interactively take user input to generate a customizable logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and then saves the dynamically generated SVG to a .svg file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To run the OOP SVG Logo Maker locally, follow these steps:

1. To run the OOP SVG Logo Maker locally, follow these steps: git clone https://github.com/MFMcNolt/OOP-SVG-Logo-Maker.git

2. Navigate to the Project Directory: cd OOP-SVG-Logo-Maker

3. Install Dependencies: npm install

In the above example, the line `npm install` indicates the installation of Node.js dependencies using the npm package manager. Users can run this command in the terminal to automatically install the dependencies listed in the `package.json` file of your project.


Now, your development environment is set up, and you can proceed to use the application.

## Usage

Please see a video of the application in use: https://drive.google.com/file/d/1OIUSoi7iVR-KuqirMrEESm8VOgDtp54w/view?usp=sharing

1. Run the application in CL: node index.js
2. Follow the Prompts:
    Enter up to three characters for the text.
    Enter text color (keyword or hexadecimal).
    Select a shape (circle, triangle, square).
    Enter shape color (keyword or hexadecimal).

![Model][def]

3. View the Generated SVG Logo:  The application will create an SVG logo based on your input and save it as logo.svg in the project directory.
Now, you can find the generated SVG logo as logo.svg.

![Model][def2]

Note: Make sure you have Node.js installed on your machine before following these steps. As well as, Inquirer and Jest.

## Credits
Inquirer: Used for user input prompts.
Node.js fs Module: Utilized for file system operations.

## License
This project is licensed under the MIT License.




[def]: ./examples/Screenshot.png
[def2]: ./examples/Screenshot2.png