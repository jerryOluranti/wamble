// import { Difficulty, Time } from './enums/enums'

interface MenuPayload {
    display: string,
    action(): void
}

interface GameAction {
    type: string,
    payload?: MenuPayload[],
    gameData?: GameData
}

interface GameState {
    payload?: MenuPayload[] | null,
    isOpen?: boolean,
    isTutorialOpen?: boolean,
    gameStarted?: boolean,
    gameData?: GameData | null
}

interface Hint {
    char: string,
    pos: number
}

interface Display {
    char: string,
    isHint: boolean
}


interface Input {
    char: string,
    isUsed: boolean,
    index: number,
    handleClick(inp: Input): void
}


interface GameData<D, T> {
    highScore: number,
    level: D,
    duration: T,
    history?: History[]
}

interface GameValuesState {
  score: number;
  currentDisplay: Display[];
  currentInput: Input[];
  currentWord: string;
  userInput: string;
  game: Game;
  wordArray: string[],
  isCorrect: boolean
}

interface GameValuesAction {
    type: string,
    payload: GameValuesPayload
}

interface GameValuesPayload {
    score?: number,
    currentDisplay?: Display[],
    currentInput?: Input[],
    currentWord?: string,
    userInput?: string,
    inputUpdate?: Input,
    game?: Game,
    wordArray?: string[],
    isCorrect?: boolean
}

interface History {
    score: number,
    level: number,
    time: number
}

type GameDispatch = (action: GameAction) => GameAction;