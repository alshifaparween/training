const initialState = {
    loading: false,
    profileData: {}
}
export const viewProfileAdmin = (state = initialState, action) => {

    switch (action.type) {
        case 'ADMIN_PROFILE_INITIATE':
            return { ...state, loading: true }

        case 'ADMIN_PROFILE_GET':

            return { ...state, profileData: action.payload,loading: false }


        case 'ADMIN_PROFILE_FAILED':

            return { ...state, loading: false }
        default:
            return state
    }


}