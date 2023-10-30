class Circle {
  constructor(userInput) {
    this.userInput = userInput;
  }

  generateSvgString() {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.userInput.shapeColor}" />
        <text x="150" y="100" fill="${this.userInput.textColor}" text-anchor="middle">${this.userInput.text}</text>
      </svg>`;
  }
}

class Triangle {
  constructor(userInput) {
    this.userInput = userInput;
  }

  generateSvgString() {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,50 100,150 200,150" fill="${this.userInput.shapeColor}" />
        <text x="150" y="100" fill="${this.userInput.textColor}" text-anchor="middle">${this.userInput.text}</text>
      </svg>`;
  }
}

class Square {
  constructor(userInput) {
    this.userInput = userInput;
  }

  generateSvgString() {
    return `<?xml version="1.0" encoding="UTF-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="100" y="50" width="100" height="100" fill="${this.userInput.shapeColor}" />
        <text x="150" y="100" fill="${this.userInput.textColor}" text-anchor="middle">${this.userInput.text}</text>
      </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
