const { returnAPI } = require("../../../../services/api/returnApi")
const { axiosInstanceWithToken } = require("../../../../services/axios/axiosInterceptors")
const { store } = require("../../../store")

exports.viewAgencyAllDeveloperAction = (agencyId) => {

    return async (dispatch) => {

        const { authentication } = store.getState()
        dispatch({ type: 'AGENCY_ALL_DEVELOPER_INITIATE' })

        // if (authentication?.userRole === 'agency') {
        //     agencyId = authentication?.userId
        // }
        if (agencyId) {
            try {
                await axiosInstanceWithToken.get(
                    returnAPI.viewAgencyAllDeveloper({ agencyId })
                ).then((res) => {
                    console.log('response viewAgencyAllDeveloperAction',res)
                    dispatch({ type: 'AGENCY_ALL_DEVELOPER_GET', payload: res?.data?.data?.profiles })

                })
            } catch (error) {
                console.log('error in viewAgencyAllDeveloperAction', error)
                dispatch({ type: 'AGENCY_ALL_DEVELOPER_FAILED' })
            }
        } else {
            console.log('agencyId not found in viewAgencyAllDeveloperAction')
            dispatch({ type: 'AGENCY_ALL_DEVELOPER_FAILED' })

        }
    }
}