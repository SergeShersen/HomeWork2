type initStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' : {
            return {
                ...state,
                themeId: action.id
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>

type ActionType = ChangeThemeIdActionType

