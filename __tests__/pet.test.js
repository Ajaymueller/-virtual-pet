const Pet = require("../src/pet");


describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Frodo')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
      const pet = new Pet('Frodo');
      expect(pet.name).toEqual('Frodo');
    });

    it('sets the initial age to 0', () => {
      const pet = new Pet('Frodo');
      expect(pet.age).toBe(0);
    });

    it('sets initial hunger to 0', () => {
      const pet = new Pet('Frodo');
      expect(pet.hunger).toBe(0);
    });

    it('sets initial fitness to 10', () => {
      const pet = new Pet('Frodo');
      expect(pet.fitness).toBe(10);
    })
  });


describe('growUp', () => {
  it('increases the age property', () => {
    const pet = new Pet('Frodo');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('increases the hunger property by 5', () => {
    const pet = new Pet('Frodo');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  })

  it('decreases the fitness property by 3', () => {
    const pet = new Pet('Frodo');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  })
  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Frodo');
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('walk', () => {
  it('increases the fitness level by 4', () => {
    const pet = new Pet('Frodo');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it('increases the fitness level to a maximum of 10', () => {
    const pet = new Pet('Frodo');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Frodo');
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
})

describe('feed', () => {
  it('decreases hunger level by 3', () => {
    const pet = new Pet('Frodo');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it('hunger level should never go below 0', () => {
    const pet = new Pet('Frodo');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Frodo');
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  it('If fitness level <= 3, it should return I need a walk', () => {
    const pet = new Pet('Frodo');
    pet.fitness = 3;
    pet.checkUp()
    expect(pet.checkUp()).toEqual('I need a walk');
  });
  it('If hunger level =< 5,it should return I am hungry', () => {
    const pet = new Pet('Frodo');
    pet.hunger = 5;
    pet.checkUp()
    expect(pet.checkUp()).toEqual('I am hungry');
  });
  it('if fitness level <= 3 and hunger level >= 5, it should return I am hungry AND I need a walk', () => {
    const pet = new Pet('Frodo');
    const hungerValue = 8;
    const fitnessValue = 2;
    pet.hunger = hungerValue
    pet.fitness = fitnessValue;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
  });
  it('if neither are true, it should return I feel great!', () => {
    const pet = new Pet('Frodo');
    const hungerValueTwo = 2
    const fitnessValueTwo = 5
    pet.hunger = hungerValueTwo;
    pet.fitness = fitnessValueTwo;
    pet.checkUp();
    expect(pet.checkUp()).toBe('I feel great!');
  })
  it('throws an error if the pet is no longer alive', () => {
    const pet = new Pet('Frodo');
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('isAlive', () => {
  it('if fitness =< 0, it should return false.', () => {
    const pet = new Pet('Frodo');
    pet.fitness = 0
    expect(pet.isAlive).toEqual(false);
  })
  it('if  hunger >= 10, it should return false', () => {
    const pet = new Pet('Frodo');
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
  })
  it('if age >= 30 , it should return false.', () => {
    const pet = new Pet('Frodo');
    pet.age = 32;
    expect(pet.isAlive).toEqual(false);
  });
  it('if none of the above are true, it should return true', () => {
    const pet = new Pet('Frodo');
    expect(pet.isAlive).toEqual(true);
  });
});