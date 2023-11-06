let hangman = ["O", "O\n|", "O\n/|", "O\n/|\\", "O\n/|\\\n/", "O HANGMAN!\n/|\\\n/\\"]


let word = prompt(`Welcome to Hangman! Pick a word for another person to guess:`).toLowerCase();
let wordArray = [];     
let spacesArray = [];   
for (i=0; i < word.length; i++) {   
  wordArray.push(word.charAt(i));  
  spacesArray.push("_");
}

alert(`Your word is ${word}. Continue to start the game.`)
alert(`The word to guess has ${spacesArray.length} characters. ${spacesArray}`);  

let guessesLeft = 6;  
let win = false;      
let j = 0;            
let guessArray = [];  
 
while (guessesLeft !== 0){   
  let guess = prompt(`Guess one letter or the whole word!\n Amount of guesses left: ${guessesLeft}\n Letters used: ${guessArray}\n Word: ${spacesArray}`).toLowerCase();
  guessArray.push(guess);    
  if(guess === word){  
    alert(`You guessed the word ${word}!`);
    guessesLeft = 0;
    win = true;
  }
  else {
    if(wordArray.includes(guess)){   
      for (i=0; i < wordArray.length; i++){   
         if(wordArray[i] === guess){         
            spacesArray[i] = guess;          
          }
      }
      alert(`The letter is in the word! ${spacesArray}`)   
      if(spacesArray.toString() === wordArray.toString()){ 
        alert(`You guessed the word ${word}!`);           
        guessesLeft = 0;
        win = true;
      }
    } else {             
      guessesLeft -= 1;    
      alert(`The letter is NOT in the word! ${spacesArray} \n${hangman[j]}`)  
      j += 1; 
    }
  }
}

if (win === false){      
  alert("You lost!");  
}




