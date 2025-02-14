// IMPORTS AND EXPORTS
import { dogs, numberOfDogs } from './importdemo.js';
// import onlyOneThing from './test.js';

import a from './test.js';

// For single export values the import name can be anything for e.g. import a from './test.js'; but for multiple exports the name should be same for e.g. import { dogs, numberOfDogs } from './importdemo.js';

console.log(`I have ${numberOfDogs} dogs.`)
console.log(`My dogs are: ${dogs.join(', ')}.`);

console.log(a);