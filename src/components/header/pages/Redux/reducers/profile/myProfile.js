const initialState = {
    loading: true,
    profileData: {}
}
export const myProfile = (state = initialState, action) => {

    switch (action.type) {
        case 'MY_PROFILE_INITIATE':
            return { ...state, loading: true }

        case 'MY_PROFILE_GET':

            return { ...state, profileData: action.payload ,loading:false}


        case 'MY_PROFILE_FAILED':

            return { ...state, loading: false }
        default:
            return state
    }


}