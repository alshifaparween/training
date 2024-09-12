const { returnAPI } = require("../../../../services/api/returnApi")
const { axiosInstanceWithToken } = require("../../../../services/axios/axiosInterceptors")
const { store } = require("../../../store")

exports.viewInHouseAllDeveloperAction = () => {

    return async (dispatch) => {

        dispatch({ type: 'AGENCY_ALL_DEVELOPER_INITIATE' })

        // if (authentication?.userRole === 'admin'||authentication?.userRole === 'sAdmin') {
        //     agencyId = authentication?.userId
        // }
            try {
                await axiosInstanceWithToken.get(
                    returnAPI.getAllInHouseDeveloper({ input: '' })
                ).then((res) => {
                    if (res.status == 200) {
                        dispatch({ type: 'AGENCY_ALL_DEVELOPER_GET', payload: res?.data?.data?.documents })
                    } else {
                        dispatch({ type: 'AGENCY_ALL_DEVELOPER_FAILED' })

                    }
                })
            } catch (error) {
                console.log('error in viewInHouseAllDeveloperAction', error)
                dispatch({ type: 'AGENCY_ALL_DEVELOPER_FAILED' })
            }
       
    }
}