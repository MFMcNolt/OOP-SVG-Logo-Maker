// shapes.test.js
const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes classes', () => {
  describe('Circle class', () => {
    test('generateSvgString method should generate correct SVG string for Circle', () => {
      const userInput = {
        shapeColor: 'blue',
        textColor: 'white',
        text: 'C',
      };

      const circle = new Circle(userInput);
      const expectedSvgString = `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <circle cx="150" cy="100" r="50" fill="blue" />
          <text x="150" y="100" fill="white" text-anchor="middle">C</text>
        </svg>`.replace(/\s/g, ''); // Remove whitespace for accurate comparison

      expect(circle.generateSvgString().replace(/\s/g, '')).toEqual(expectedSvgString);
    });
  });

  describe('Triangle class', () => {
    test('generateSvgString method should generate correct SVG string for Triangle', () => {
      const userInput = {
        shapeColor: 'red',
        textColor: 'black',
        text: 'T',
      };

      const triangle = new Triangle(userInput);
      const expectedSvgString = `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <polygon points="150,50 100,150 200,150" fill="red" />
          <text x="150" y="100" fill="black" text-anchor="middle">T</text>
        </svg>`.replace(/\s/g, ''); // Remove whitespace for accurate comparison

      expect(triangle.generateSvgString().replace(/\s/g, '')).toEqual(expectedSvgString);
    });
  });

  describe('Square class', () => {
    test('generateSvgString method should generate correct SVG string for Square', () => {
      const userInput = {
        shapeColor: 'green',
        textColor: 'yellow',
        text: 'S',
      };

      const square = new Square(userInput);
      const expectedSvgString = `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <rect x="100" y="50" width="100" height="100" fill="green" />
          <text x="150" y="100" fill="yellow" text-anchor="middle">S</text>
        </svg>`.replace(/\s/g, ''); // Remove whitespace for accurate comparison

      expect(square.generateSvgString().replace(/\s/g, '')).toEqual(expectedSvgString);
    });
  });
});
