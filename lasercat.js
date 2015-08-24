import Cat from './cat';
import dummy from './constants';

export default class CatWithLasers extends Cat {
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
