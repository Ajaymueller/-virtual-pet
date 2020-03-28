const MAXIMUM_FITNESS = 10;
const MIN_HUNGER = 0;


class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MIN_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
  };

  growUp() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }
    this.age++;
    this.hunger += 5;
    this.fitness -= 3;
  };

  walk() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + 4) < MAXIMUM_FITNESS ) {
      this.fitness += 4;
     }  else {
     this.fitness = MAXIMUM_FITNESS;
   } return this
  }

  feed() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }
    if((this.hunger) > MIN_HUNGER) {
      this.hunger -= 3;
    } else {
      this.hunger = MIN_HUNGER;
    } return this
  };

  checkUp() {
    if (!this.isAlive) {
      throw new Error('Your pet is no longer alive :(');
    }
    const FITNESS_THRESHOLD = 3;
    const HUNGER_THRESHOLD = 5;
    if (this.fitness <= FITNESS_THRESHOLD && this.hunger >= HUNGER_THRESHOLD) {
      return 'I am hungry AND I need a walk'
    }; if (this.fitness <= FITNESS_THRESHOLD) {
      return 'I need a walk'; 
    } if (this.hunger >= HUNGER_THRESHOLD) {
      return 'I am hungry';
    }  else {
      return 'I feel great!'
    };
  };

  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0
  };

  
};




module.exports = Pet;