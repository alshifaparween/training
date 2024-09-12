const initialState = {
    loading: false,
    profiles: []
}
export const viewAgencyAllDeveloper = (state = initialState, action) => {
    switch (action.type) {
        case 'AGENCY_ALL_DEVELOPER_INITIATE':
            return {
                ...state, loading: true
            }
        case 'AGENCY_ALL_DEVELOPER_GET':

            return {
                ...state, profiles: action.payload, loading: false
            }
        case 'AGENCY_ALL_DEVELOPER_FAILED':

            return {
                ...state, loading: false
            }

        default:
            return state
    }
}