var inquirer = require('inquirer');
var wordList = require('./wordlist');
var Word = require('./word');
console.log(wordList);
var word;
var rando;


function getWord() {
	rando = wordList[Math.floor(Math.random() * wordList.length)]
	console.log(rando)
	word = new Word(rando)
	word.genUnderScored()
}
getWord()
function askForLetter (){
		var inquirer = require('inquirer');
		inquirer.prompt([{
				name: "letter",
				type: "input",
				message: "Please type in a letter to guess."

		}]).then(answers => {
		console.log(answers.letter)
		var userGuess = answers.letter
		word.userLetter(userGuess)
		console.log(word.underScores.join(""))
		console.log(rando)
		if(word.underScores.join("") != rando){
			askForLetter()
		} else if (word.underScores.join("") == rando ){
			console.log("You Win!!!!!!")

		}
		});
}
askForLetter()






