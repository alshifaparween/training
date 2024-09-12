const initialState = {
    loading: true,
    profileData: {}
}
export const viewProfileDev = (state = initialState, action) => {

    switch (action.type) {
        case 'DEVELOPER_PROFILE_INITIATE':
            return { ...state, loading: true }

        case 'DEVELOPER_PROFILE_GET':

            return { ...state, profileData: action.payload ,loading:false}


        case 'DEVELOPER_PROFILE_FAILED':

            return { ...state, loading: false }
        default:
            return state
    }


}