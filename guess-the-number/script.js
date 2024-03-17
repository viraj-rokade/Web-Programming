const game = {
    title: "Guess the Number!",
    biggestNum: 100,
    smallestNum: 1,
    secretNum: 0,
    guesses: [],
    numCheck: 0,
    playAgain: 'none',

    play: function() {
        this.secretNum =
        Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
        this.smallestNum;

        while (this.numCheck == 0) {
            alert(this.render());
        }

        this.playAgain = "play";
    },

    render: function() {
        const promptVal = this.getGuess();
        const randomNumber = this.secretNum;

            if (promptVal === randomNumber) {
                this.numCheck = true;
                return `Congratulations! You have guessed the number in ${this.guesses.length} guesses!`;
            } else if (promptVal > randomNumber) {
                this.guesses.push(promptVal);
                return `Too high, Your guesses: ${this.guesses.join(", ")}`;
            } else if (promptVal < randomNumber) {
                this.guesses.push(promptVal);
                return `Too low, Your guesses: ${this.guesses.join(", ")}`;
            } else if (promptVal == "wrong") {
            let msg = `Not a valid number! Please enter a number between ${this.smallestNum} and ${this.biggestNum}`;
                return msg;
            } 
    },

    getGuess: function() {
        let guess = Number(prompt(`Enter a guess between ${game.smallestNum} and ${game.biggestNum}`));

        if (guess >= game.smallestNum && guess <= game.biggestNum) {
            return guess;
        } else return "wrong";
    },

    gameStart: function() {
        this.smallestNum = Number(prompt(
            `Enter a smallest number`
        ));

        this.biggestNum = Number(prompt(
            `Enter a biggest number`
        ));

        if (this.biggestNum < this.smallestNum) {
            alert("Biggest number cannot be smaller than smallest number!");
            this.biggestNum = Number(prompt(
            `Enter a biggest number`
            ));
        }
        
        this.play();

        if (this.playAgain == "play") {
            this.playAgainFunc();
        }
        
        return "Thank you for playing!"
    },

    playAgainFunc: function() {
        let promptValue = Number(prompt("Do you want to play again? Enter 1 for 'Yes' and 2 for 'No' "));

        if(promptValue == 1) {
          this.numCheck = 0;
          this.gameStart();
        }
          
        else if(promptValue == 2) return "Thank you for playing";
        else {
            alert("Please enter 1 or 2 only");
            this.playAgainFunc();
        }
    }
};

console.log(game.gameStart());

