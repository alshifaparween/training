const { BServer } = require("../../../../server/backend")
const { returnAPI } = require("../../../../services/api/returnApi")
const { axiosInstanceWithToken } = require("../../../../services/axios/axiosInterceptors")
const { store } = require("../../../store")

exports.viewProfileAdminAction = (_id) => {
    console.log('running viewProfileAdminAction')

    return async (dispatch) => {
        const { authentication } = store?.getState()

        if (_id === authentication?.userId) {
            console.log('hi 1')
            dispatch({ type: 'MY_PROFILE_INITIATE' })
        } else {
            console.log('hi 2')

            dispatch({ type: 'ADMIN_PROFILE_INITIATE' })
        }
        try {
            await axiosInstanceWithToken.get(
                // `${BServer}/agency/profile/${authentication.userId}`
                returnAPI.viewProfileAdmin({ userId: _id })
            ).then((res) => {
                console.log('res11', res)
                if (res?.data?.errorCode === 200) {

                    if (_id === authentication?.userId) {
                        dispatch({ type: 'MY_PROFILE_GET', payload: res?.data?.data })
                    } else {
                        dispatch({ type: 'ADMIN_PROFILE_GET', payload: res?.data?.data })
                    }
                } else {
                    if (_id === authentication?.userId) {
                        dispatch({ type: 'MY_PROFILE_FAILED' })
                    } else {
                        dispatch({ type: 'ADMIN_PROFILE_FAILED' })
                    }
                }
            })
        } catch (error) {
            console.log('error in viewProfileAdminAction', error)
            if (_id === authentication?.userId) {
                dispatch({ type: 'MY_PROFILE_FAILED' })
            } else {
                dispatch({ type: 'ADMIN_PROFILE_FAILED' })
            }
        }
    }
}