const initialState = {
    loading: false,
    token: '',
    userId:'',
    userRole: '',
    userEmail: '',
    emailValidate: false,
    mobileValidate: false,
    isCreateProfile: false,

}
export const authentication = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_INITIATE':

            return { ...state, loading: true }
        case 'LOGIN_SUCCESSFULLY':

            return { ...state, loading: false, token: action.payload.token, userRole: action.payload.userRole, userEmail: action.payload.userEmail, emailValidate: action.payload.emailValidate, mobileValidate: action.payload.mobileValidate, isCreateProfile: action.payload.isCreateProfile ,userId:action.payload.userId}

        case 'LOGIN_FAILURE':

            return { ...state, loading: false, token: '', userRole: '', userEmail: '' }
        case 'LOGOUT_INITIATE':

            return { ...state, loading: true }


        case 'LOGOUT_SUCCESSFULLY':

            return {
                loading: false,
                token: '',
                userEmail: '',
                userRole:'',
                userId:'',
            }
        case 'PROFILE_CREATED':
            return { ...state, isCreateProfile: true }

            case 'MOBILE_VALIDATED':
            return { ...state, mobileValidate: true }

        default: return state

    }

}