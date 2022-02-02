import { Difficulty, Time } from "../enums/enums";
import Word from './Word'



export default class Game {
    public currentScore: number = 0;
    private currentWord: Word | null = null;
    private currentScrambledWord: String = '';
    private currentScrambledWordDisplay: Display[] = []; 
    public isHintUsed: boolean = false;


    constructor(private words: string[], public difficulty: Difficulty, public time: Time) {
        this.words = this.filterWords(words, difficulty);
        this.difficulty = difficulty;
        this.time = time;
    }

    public getWord(): String {
        this.currentWord = new Word(this.words[ Math.floor(Math.random() * this.words.length) ]);
        if (this.currentScrambledWord === '') this.getScrambled();
        return this.currentWord.getWord();
    }

    private getScrambled(): void {
        if (this.currentWord) this.currentScrambledWord = this.currentWord?.scramWord;
    }

    public getCurrentScrambledWordDisplay(): Display[] {
        // console.log('Here => Game > getCurrentScrambledWord()', this.currentScrambledWord);
        this.currentScrambledWordDisplay = this.currentScrambledWord.split('').map(char => {
            return {
                char,
                isHint: false
            }
        })

        // console.log('Here => Game > getCurrentScrambledWord()', this.currentScrambledWordDisplay);


        return this.currentScrambledWordDisplay;
    }

    public getHint(): Display[] {
        const hints: Hint[] | null | undefined = this.currentWord?.hintWord(this.difficulty);

        hints?.forEach(hint => {
            this.swap(hint.pos, this.currentScrambledWordDisplay, hint.char)
        })

        return this.currentScrambledWordDisplay;
    }

    public isCorrect(word: string): boolean {
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
        const lastPos: number = wordDisplay.findIndex( word => word.char === swapChar );

        wordDisplay[lastPos] = wordDisplay[pos];

        wordDisplay[pos] = {
            char: swapChar,
            isHint: true
        };

        this.currentScrambledWordDisplay = wordDisplay;
        this.isHintUsed = true;
    } 


}