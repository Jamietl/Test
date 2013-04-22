/**
 * Created with JetBrains WebStorm.
 * User: Jamiw
 * Date: 12/04/13
 * Time: 20:24
 * To change this template use File | Settings | File Templates.
 */
var wordschema = {
    properties: {
        word: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Word may only include letters, spaces and hyphons.',
            required: true
        }
    }
};

var guessschema = {
    properties: {
        guess: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Word may only include letters, spaces and hyphens.',
            required: true
        }
    }
};

var GameComplete = 0;
var hangingMan = new Array('/|', '|', '|/', '_________', ' |/     |', ' |      |', ' |      0', ' |     -|-', ' |     /');
var ViewAttempts = new Array('_');


var InitialWord = require('prompt');
InitialWord.start();
// Starts the prompt.

InitialWord.get(wordschema, function (err, Word) {
    console.log('Word received. Good luck guessing!');
    console.log(Word.word);
    var TotalLength = Word.word;
    var WordLength = TotalLength.length;

    ViewAttempts.length = WordLength;
    //length of word Array is set
    var failure = 0;
    //console.log('hello again');
    //testing

    for(GameComplete = false; GameComplete == false;) {

        var InitialGuess = require('Prompt');
        InitialGuess.start();
        InitialGuess.get(guessschema, function (err, Guess) {
            var GuessLetter = Guess.guess;
            console.log('Guess received.');
            var counter = 0;

            for(counter<(WordLength); counter<(WordLength); counter = counter + 1){

                if(GuessLetter == TotalLength.charAt(counter)) {
                    //console.log(TotalLength.charAt(counter));
                    ViewAttempts[(counter)] =  TotalLength.charAt(counter);
                }
                else{
                    failure = failure + 1;

                    if(failure = 1){
                        console.log(hangingMan[3]);
                        console.log(hangingMan[2]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[0]);
                    }
                    else if(failure = 2){
                        console.log(hangingMan[3]);
                        console.log(hangingMan[4]);
                        console.log(hangingMan[5]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[0]);
                    }
                    else if(failure = 3){
                        console.log(hangingMan[3]);
                        console.log(hangingMan[4]);
                        console.log(hangingMan[5]);
                        console.log(hangingMan[6]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[0]);
                    }
                    else if(failure = 4){
                        console.log(hangingMan[3]);
                        console.log(hangingMan[4]);
                        console.log(hangingMan[5]);
                        console.log(hangingMan[6]);
                        console.log(hangingMan[7]);
                        console.log(hangingMan[8]);
                        console.log(hangingMan[1]);
                        console.log(hangingMan[0]);
                        console.log('You have lost! The word was ' + Word.word );
                        GameComplete = true;
                    }
                }
            }
        });


        var counter = 0;
        for(GameComplete = false; counter !== WordLength; counter++){

            var FinalWord = FinalWord + ViewAttempts[(counter)];
            counter = counter + 1;
            console.log(FinalWord);
        }
        if(FinalWord == Word.word){
            GameComplete = true;
            console.log('Well done on completing the Game.');
        }


    }


});
