interface MenuPayload {
    display: string,
    action(): void
}

interface MenuAction {
    type: string,
    payload: MenuPayload[]
}

interface MenuState {
    payload: MenuPayload[],
    isOpen?: boolean,
    isTutorialOpen?: boolean
}

type MenuDispatch = (action: MenuAction) => MenuAction;