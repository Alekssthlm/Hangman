//visual representation of the hangman
let hangman = ["O", "O\n|", "O\n/|", "O\n/|\\", "O\n/|\\\n/", "O HANGMAN!\n/|\\\n/\\"]
//

//Asks the manager of the game to pick a word for players to guess and store the word
let word = prompt(`Welcome to Hangman! Pick a word for another person to guess:`).toLowerCase();
let wordArray = [];     //empty array for storing each character of the picked word
let spacesArray = [];   //empty array for storing underscores with the same length of the picked word to visualise guesses
for (i=0; i < word.length; i++) {   //loop pushes each letter of the word into the wordArray in the right order, as well as underscores to spacesArray
  wordArray.push(word.charAt(i));  
  spacesArray.push("_");
}

alert(`Your word is ${word}. Continue to start the game.`)
alert(`The word to guess has ${spacesArray.length} characters. ${spacesArray}`);  //this will show underscores symbolizing empty guesses ex dog will show _._._

let guessesLeft = 6;  //hangman based on 6 parts of the hangman "body"
let win = false;      //boolean to check if player wins or loses
let j = 0;            //variable used inside the while-loop below to display index items of the hangman body array when a letter is wrong
let guessArray = [];  //array that stores all guessed characters for visual aid for the player
 
while (guessesLeft !== 0){   //loops as long as the player has guess attempts left
  let guess = prompt(`Guess one letter or the whole word!\n Amount of guesses left: ${guessesLeft}\n Letters used: ${guessArray}\n Word: ${spacesArray}`).toLowerCase();
  guessArray.push(guess);    //pushes the guessed letter or word to the array, will be shown to the player after the first loop
  if(guess === word){  //if player inputs a word that is the right guess, tell player they won, end loop by turning guesses left to 0 and switch boolean win to true
    alert(`You guessed the word ${word}!`);
    guessesLeft = 0;
    win = true;
  }
  else {
    if(wordArray.includes(guess)){   //else, if the guessed character is part of the word to be guessed (in the array version)...
      for (i=0; i < wordArray.length; i++){   //loop through each character in the word array and...
         if(wordArray[i] === guess){          //... if the current character matches the guessed character...
            spacesArray[i] = guess;           //... go into the underscore array and replace the current underscore with the guessed character (mirroring the word array)
          }
      }
      alert(`The letter is in the word! ${spacesArray}`)   //message player that the letter is in the word
      if(spacesArray.toString() === wordArray.toString()){ //in case the player guesses all letters, the underscore array should have same items as the word array...
        alert(`You guessed the word ${word}!`);            //... therefore, player wins. We exit loop by changing guessesLeft to 0 and turning win to true
        guessesLeft = 0;
        win = true;
      }
    } else {            //else, if the guessed character is not in the word, we remove one guess attempt, we message the player and show the status of the underscore array and 
      guessesLeft -= 1;    //a visual representation of a hangman body part 
      alert(`The letter is NOT in the word! ${spacesArray} \n${hangman[j]}`)  //here we use the variable j to target the index of each body part in our hangman array
      j += 1; //for next time the guess is wrong, the next index or body part will display
    }
  }
}

if (win === false){      //if the player doesnt guess the word by the time the loop ends, the win boolean wont be changed to true...
  alert("You lost!");   //therefore, by being false we message the player that they lost
}




