import { returnAPI } from "../../../services/api/returnApi"
import { axiosInstanceWithoutToken } from "../../../services/axios/axiosInterceptors"

export const formDropdown = () => {
    return async (dispatch) => {
        dispatch({ type: 'FORM_DROPDOWN_INITIATE' })
        try {
            await axiosInstanceWithoutToken.get(returnAPI.getFormDropdown())
                .then((res) => {
                    // console.log('res form', res)
                    dispatch({ type: 'FORM_DROPDOWN_GET', payload: res?.data?.data })

                })
        } catch (error) {
            console.log('error in formDropdown', error)
            dispatch({ type: 'FORM_DROPDOWN_FAILED' })

        }
    }
}