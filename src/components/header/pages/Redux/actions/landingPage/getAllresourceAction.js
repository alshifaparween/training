import { returnAPI } from "../../../services/api/returnApi"
import { axiosInstanceWithToken, axiosInstanceWithoutToken } from "../../../services/axios/axiosInterceptors"

export const getAllresourceAction = () => {
    return async (dispatch) => {
        dispatch({ type: 'GET_ALL_RESOURCE_INITIATE' })

        try {
            axiosInstanceWithoutToken.get(returnAPI.getAllresourceAction())
                .then((res) => {
                    // console.log('response getAllresourceAction', res)
                    if (res.status === 200) {
                        dispatch({
                            type: 'GET_ALL_RESOURCE_GET', payload: {
                                documents: res?.data?.data
                            }
                        })
                    } else {
                        dispatch({ type: 'GET_ALL_RESOURCE_FAILED' })
                    }
                })
        } catch (error) {
            console.log('error in getAllresourceAction', error)
            dispatch({ type: 'GET_ALL_RESOURCE_FAILED' })
        }
    }
}