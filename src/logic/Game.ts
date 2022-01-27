import { Difficulty, Time } from "../enums/enums";
import Word from './Word'



export default class Game {
    public currentScore: number = 0;
    public currentWord: Word | null = null;
    public currentScrambledWord: String = '';
    public currentScrambledWordDisplay: Display[] = []; 
    public isHintUsed: boolean = false;


    constructor(private words: string[], public difficulty: Difficulty, public time: Time) {
        this.words = this.filterWords(words, difficulty);
        this.difficulty = difficulty;
        this.time = time;
    }

    public getWord(): String {
        this.currentWord = new Word(this.words[ Math.floor(Math.random() * this.words.length) ]);
        return this.currentWord.getWord();
    }

    private getScrambled(): String {
        if (this.currentWord) this.currentScrambledWord = this.currentWord?.scramWord;

        return this.currentScrambledWord;
    }

    public getCurrentScrambledWordDisplay(): Display[] {

        this.currentScrambledWord.split('').forEach(char => {
            this.currentScrambledWordDisplay.push({
                char,
                isHint: false
            })
        })

        return this.currentScrambledWordDisplay;
    }

    public getHint(): String {
        const hints: Hint[] | null | undefined = this.currentWord?.hintWord(this.difficulty);

        hints?.forEach(hint => {
            this.swap(hint.pos, this.currentScrambledWordDisplay, hint.char)
        })

        return this.currentScrambledWord;
    }

    public isCorrect(word: String): boolean {
        return word === this.currentWord?.getWord();
    }

    public addScore(sequence: number): number {
        this.isHintUsed ? this.currentScore += sequence / 2 : this.currentScore += sequence;

        return this.currentScore;
    }

    private filterWords(words: string[], difficulty: Difficulty): string[] {
        switch (difficulty) {
            case Difficulty.EASY:
                return words.filter( word => word.length <= Difficulty.EASY )
            case Difficulty.MEDIUM:
                return words.filter( word => word.length >= Difficulty.EASY && word.length <= Difficulty.HARD )
            default:
                return words.filter( word => word.length >= Difficulty.MEDIUM )
        }
    }

    private swap(pos: number, wordDisplay: Display[], swapChar: string): void {
        const lastPos: number = wordDisplay.findIndex( word => word.char = swapChar );

        wordDisplay[lastPos] = wordDisplay[pos];

        wordDisplay[pos] = {
            char: swapChar,
            isHint: true
        };

        this.currentScrambledWordDisplay = wordDisplay;
        this.isHintUsed = true;
    } 


}