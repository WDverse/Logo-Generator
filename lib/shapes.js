const Logo = require("./logo");

class Circle extends Logo {
  render() {
    const { text, textColor, shape, shapeColor } = this;
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" fill="${shapeColor}"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="${textColor}">${text}</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
  }
}

class Triangle extends Logo {
  render() {
    const { text, textColor, shape, shapeColor } = this;
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="200,10 250,190 160,210" fill="${shapeColor}"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="${textColor}">${text}</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
  }
}

class Square extends Logo {
  render() {
    const { text, textColor, shape, shapeColor } = this;
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" fill="${shapeColor}"/>
    <text x="10" y="10" text-anchor="middle" font-weight="bold" fill="${textColor}">${text}</text>
    <style><![CDATA[text{font: 28px Verdana, Helvetica, Arial, sans-serif}]]></style>
  </svg>`;
  }
}


module.exports = {
    Circle,
    Triangle,
    Square
};
