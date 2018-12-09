//Used for each letter in the current word.Each letter object should either display an underlying character, or a blank placeholder(such as an underscore), depending on whether or not the user has guessed the letter.This should contain letter specific logic and data.
function Letter(letter) {
    this.letter = letter;
    this.visible = false;
};
Letter.prototype.shower = function (){
    if(this.visible === true ) {
        return this.letter
    }
    return "_";
}

Letter.prototype.userGuess = function (guess) {
    if(guess.toUpperCase() === this.letter.toUpperCase()){
        this.visible = true
        return true
    }
    return false;
}
module.exports = Letter;