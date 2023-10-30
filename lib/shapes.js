class Square {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect width="100" height="100" fill="${this.color}" />`;
    }
  }
  
  class Circle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon points="50,0 100,100 0,100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Square, Circle, Triangle };
  