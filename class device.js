
class HomeDevice {
  constructor(type, label){
    this.type = type;
    this.label = label;
    this.isOn = false;
  }

  on() {
    console.log(this.type + " is On");
    this.isOn = true;
  }
  
  off() {
    console.log(this.type + " is Off");
    this.isOn = false;
  }
}

class Tv extends HomeDevice {
  constructor (type, label, matrix, diagonal, installation) {
    super(type, label);
    this.label = label;
    this.matrix = matrix;
    this.diagonal = diagonal;
    this.installation = installation;
    this.isOn = false;
  }
}

class Fan extends HomeDevice {
  constructor(type, label, power) {
    super(type, label); 
    this.label = label;
    this.power = power;
    this.isOn = true;
  }
}

const tv = new Tv("TV", "LG", "LCD",  "55",  "wall");

const fan = new Fan("Fan", "Scarlet", "1400W");

tv.on();
fan.off();

console.log(fan)
console.log(tv)