interface MenuPayload {
    display: string,
    action(): void
}

interface GameAction {
    type: string,
    payload: MenuPayload[]
}

interface GameState {
    payload: MenuPayload[],
    isOpen?: boolean,
    isTutorialOpen?: boolean,
    gameStarted?: boolean,
}

interface Hint {
    char: string,
    pos: number
}

interface Display {
    char: string,
    isHint: boolean
}

type GameDispatch = (action: GameAction) => GameAction;