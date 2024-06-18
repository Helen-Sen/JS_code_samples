module.exports = class Animal {
  type;
  name;
  age;
  voice;

  constructor(type, name, age, voice) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.voice = voice;
  }



  getInfo() {
    console.log("-----------------------------------");
    console.log(`My name is ${this.name}, I'm a ${this.type}.`);
    console.log(`I'm ${this.age} years old, my voice is ${this.voice}.`);
    console.log("-----------------------------------");
  }


  alarm() {
    console.log(`${capitalizeFirstChar(this.type)} ${this.name} sees something dangerous!!!`);
    console.log(`${capitalizeFirstChar(this.voice)}, ${this.voice}, ${this.voice}!!!`);
  }

  emotion() {
    console.log(`${capitalizeFirstChar(this.type)} ${this.name} feels happy)))`);    
  }
};

function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
