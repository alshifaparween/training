export const logout = async(state, action) => {
    // console.log('LOGOUT', action.type)

    switch (action?.type) {
        case 'LOGOUT':
            console.log('LOGOUT')
            return state

        default:
            return state
    }

}