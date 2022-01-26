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

type GameDispatch = (action: GameAction) => GameAction;