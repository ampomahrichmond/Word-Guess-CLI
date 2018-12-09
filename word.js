var Letter = require('./Letter');


console.log();

function Word(word) {
    this.word = word
    this.nLet = []
    this.underScores = [];
    this.count = 0
    this.genUnderScored = function(){
        for (let i = 0; i < this.word.length; i++) {
            var letter = new Letter(word[i])
            this.nLet.push(letter)
            this.underScores.push(letter.shower())
        }
        console.log(this.nLet)
        this.updateConsole()
    }
    this.userLetter = function (letter) {
        for (var i = 0; i < this.nLet.length; i++) {
            console.log("hmmmmm");
            if(this.nLet[i].userGuess(letter)){
                this.underScores[i] = this.nLet[i].shower()
                
            }
        }
        this.updateConsole()
    }
    this.updateConsole = function(){
        console.log(this.underScores.join(" "))
       
    }
};
module.exports = Word;