const { BServer } = require("../../../../server/backend")
const { axiosInstanceWithToken } = require("../../../../services/axios/axiosInterceptors")
const { store } = require("../../../store")

exports.viewProfileAgencyAction = (userId) => {

    return async (dispatch) => {
        const { authentication } = store?.getState()

        if (authentication?.userRole === 'agency') {
            dispatch({ type: 'MY_PROFILE_INITIATE' })
        }else{
            dispatch({ type: 'AGENCY_PROFILE_INITIATE' })
        }
        try {
            await axiosInstanceWithToken.get(`${BServer}/agency/profile/${userId}`).then((res) => {
                console.log('response viewProfileAgencyAction 17', res)
                if (res?.data?.errorCode === 200) {

                    if (authentication?.userRole === 'agency') {
                        dispatch({ type: 'MY_PROFILE_GET', payload: res?.data?.data })
                    } else {
                        dispatch({ type: 'AGENCY_PROFILE_GET', payload: res?.data?.data })
                    }
                } else {
                    if (authentication?.userRole === 'agency') {
                        dispatch({ type: 'MY_PROFILE_FAILED' })
                    } else {
                        dispatch({ type: 'AGENCY_PROFILE_FAILED' })
                    }
                }
            })
        } catch (error) {
            console.log('error in viewProfileAgencyAction', error)
            if (authentication?.userRole === 'agency') {
                dispatch({ type: 'MY_PROFILE_FAILED' })
            } else {
                dispatch({ type: 'AGENCY_PROFILE_FAILED' })
            }        }
    }
}