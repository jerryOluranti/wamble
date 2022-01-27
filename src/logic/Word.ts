import { Difficulty } from "../enums/enums";

export default class Word {

    public word: String;
    public scramWord: String;

    constructor(word: String) {
        this.word = word;
        this.scramWord = this.scrambleWord();
    }

    public scrambleWord(): String {
        return this.word.split('').sort(function () {
            return 0.5 - Math.random();
        }).join('');
    }

    public getWord(): String {
        return this.word;
    }

    public getScrambled(): String {
        return this.scramWord;
    }

    public hintWord(level: Difficulty): Hint[] | null {
        let seed: Number,
            result: Hint[] = [];

        switch (level){
            case Difficulty.EASY:
                seed = Math.floor(this.scramWord.length * 0.2);
                break;
            case Difficulty.MEDIUM:
                seed = Math.floor(this.scramWord.length * 0.6);
                break;
            case Difficulty.HARD:
                seed = Math.floor(this.scramWord.length * 0.8);
                break;
            default:
                seed = 0;
        }

        if (seed === 0) return null

        for (let i = 0; i < seed; i++){
            let choice = this.word[Math.floor(Math.random() * this.word.length)];
            let temp: Hint = {
                    char: choice,
                    pos: this.word.indexOf(choice)
            } 

            result.push(temp);
        }
        
        return result;  
    }
    
}