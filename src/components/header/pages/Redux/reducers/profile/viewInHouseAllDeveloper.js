const initialState = {
    loading: false,
    profiles: []
}
export const viewInHouseAllDeveloper = (state = initialState, action) => {
    switch (action.type) {
        case 'IN_HOUSE_DEVELOPER_INITIATE':
            return {
                ...state, loading: true
            }
        case 'IN_HOUSE_DEVELOPER_GET':

            return {
                ...state, profiles: action.payload, loading: false
            }
        case 'IN_HOUSE_DEVELOPER_FAILED':

            return {
                ...state, loading: false
            }

        default:
            return state
    }
}