

const dummy = {
  name: 'you',
  bodyParts: ['head', 'shoulders', 'knees', 'toes']
};

class Cat {
  constructor() {
    console.log('Powering up a new Cat');
  }
}

class CatWithLasers extends Cat {
  constructor() {
    super();
    console.log('...with LaSeRS!!!');
  }
  attack(whom=[dummy], ...etc) {
    for (let {name, bodyParts} of whom) {
      let parts = bodyParts.map((part) => part.toUpperCase()).join(',');
      return `laserCat attacks ${name} in the ${parts} with lasers`;
    }
  }
}

let camachoCat = new CatWithLasers();
console.log(camachoCat.attack());
