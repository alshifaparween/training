const initialState = {
    loading: true,
    profileData: {}
}
export const viewProfileAgency = (state = initialState, action) => {

    switch (action.type) {
        case 'AGENCY_PROFILE_INITIATE':
            return { ...state, loading: true }

        case 'AGENCY_PROFILE_GET':

            return { ...state, profileData: action.payload,loading: false }


        case 'AGENCY_PROFILE_FAILED':

            return { ...state, loading: false }
        default:
            return state
    }


}