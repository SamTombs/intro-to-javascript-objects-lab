const pokedex = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],      
}  

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/
console.log('--------Exercise 3--------');


// added difficulty to game as a property. Selection of ease considred as playerLevel

game.difficulty = 
[playerLevel1 = 'Easy',
playerLevel2 = 'Med',
playerLevel3 = 'Hard'];

console.log(playerLevel2);

console.log(game);
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/
console.log('--------Exercise 4--------');

// Firstly I needed to find the starter pokemon

const starterPokemon = pokedex.filter((pokemon) => {
  return pokemon.starter === true;
});

// I wanted a function that would let me see the starter pokemon. Then show it using the console log below
// console.log("Pokemon available to choose as a Starter:", starterPokemon);

//pushed the starterPokemon from the pokemon data to my party

game.party.push(starterPokemon[1]);

console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

console.log('--------Exercise 5--------');

// Kept it simple and pushed 3 more pokemon from my pre determined pokedex

// Select 3 pokemon from data.js push them to the party property.
game.party.push(pokedex[17], pokedex[61], pokedex[93]);

// Console log to see the additions to the party.
console.log(game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

console.log('--------Exercise 6--------');

//gymDefeated set as a method to the game object
game.startingOut = function() {

  // forEach used to iterate through the gyms property
  game.gyms.forEach(function(gym) { 
  // if statement used to find out if the difficulty is less than 3
  if (gym.difficulty < 3) {
  //make any gyms with a difficulty less than 3 the boolean true
      gym.completed = true;
  }
});
};

//Run the method
game.startingOut();

console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
console.log('--------Exercise 7--------');

//simple assignment of the first position of party to a new pokemon in pokedex
game.party[0] = pokedex[4];

console.log(game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log('--------Exercise 8--------');

game.party.forEach(pokemon => console.log(pokemon.name));

console.log('');

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.

Solve Exercise 9 here:
*/
console.log('--------Exercise 9--------');

// I believe I have actioned this in ex 3. I have console logged [1] but removing the one will show all starters

// const starterPokemon = pokedex.filter((pokemon) => {
//   return pokemon.starter === true;
// });

// used this useful forEach to iterate through and bring me what I want
starterPokemon.forEach(pokemon => console.log(pokemon.name));

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
console.log('--------Exercise 10--------');

// I created a method for catchPokemon with a parameter pokemonObj
game.catchPokemon = function(pokemonObj) {
  //pushed pokemonObj to party
  game.party.push(pokemonObj);
  //Not sure what I should put but did an empty string so nothing was returned
  return "";
} 

//called the method by adding the Gyrados from the pokedex
game.catchPokemon(pokedex[129])

//logged my new party
console.log(game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

console.log('--------Exercise 11--------');

game.catchPokemon = function(pokemonObj) {
  //kept this the same so that when the functions calls it will push the parameter
  game.party.push(pokemonObj);
  //another method included to find the pokeballs
  const itemPokeball = game.items.find(items => items.name === "pokeball")
  //I knew I needed an if statement but took me a while to work it properly
  if (itemPokeball) {
    itemPokeball.quantity--;
  }
  //Is return "" still needed?
  return "";
} 
//called the method by adding the Electrode from the pokedex.
game.catchPokemon(pokedex[100])

//logged my new party
console.log(game.party);
//should see a reduced pokeball by 1
console.log(game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

console.log('--------Exercise 12--------');

//Have a feeling there is a better and easier way then I have done it

//changed it to gettingStronger to distinguish from startingout set as a method to the game object
game.gettingStronger = function() {

 
  game.gyms.forEach(function(gym) { 
  // changed it to 6
  if (gym.difficulty < 6) {
      gym.completed = true;
  }
});
};

//Run the method
game.gettingStronger();

console.log(game.gyms);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

console.log('--------Exercise 13--------');

game.gymStatus = function () {
  //set the const gymTally object
  const gymTally = {complete: 0, incomplete: 0};
  //forEach used to iterate through
  game.gyms.forEach(gym => {
    //if statements are simpler for me than using a for loop
    if (gym.completed === true) {
      gymTally.complete++;
  } else {
      gymTally.incomplete++; 
  };
});
// Had a scope issue for a long time was trying to log outside of the function, kept saying function anonymous or undefined
console.log(gymTally);
};

game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
console.log('--------Exercise 14--------');

//added partycount method to game
game.partyCount = function () {
  //returns the length of the array
  return game.party.length; 
};

//so I can add call partycount and then use it later in a sentence
const howManyPokemon = game.partyCount();

// console logs interpolates the howManyPokemon var
console.log(`Ẏou currently have ${howManyPokemon} Pokemon in your party!!`);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
// There must be a quicker or easier to do this
console.log('--------Exercise 15--------');

game.nearlyDone = function() {

  // forEach used to iterate through the gyms property
  game.gyms.forEach(function(gym) { 
  // if statement used to find out if the difficulty is less than 3
  if (gym.difficulty < 8) {
  //make any gyms with a difficulty less than 3 the boolean true
      gym.completed = true;
  }
});
};

game.nearlyDone();

console.log(game.gyms);
//how do I get it to update gymTally as that is console logged in the scope previously and I cant get it outside the scope of the gamestatus function

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log('--------Exercise 16--------');

//many functions are anonymous I assume due to scope
console.log(game);








