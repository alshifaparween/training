const { toast } = require("react-toastify")

exports.logoutAction = (navigate) => {
    return async (dispatch) => {

        dispatch({ type: 'LOGOUT_INITIATE' })
        setTimeout(() => {
            dispatch({ type: 'LOGOUT_SUCCESSFULLY' })
            if (navigate) {
                navigate()
            }
        }, 1000)
    }
}