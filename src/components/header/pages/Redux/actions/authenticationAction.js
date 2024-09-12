import { toast } from "react-toastify"
import { BServer } from "../../server/backend"
import { axiosInstanceWithoutToken } from "../../services/axios/axiosInterceptors"
import { viewProfileDevAction } from "./profile/viewProfile/viewProfileDevAction"
import { viewProfileAgencyAction } from "./profile/viewProfile/viewProfileAgencyAction"
import { viewProfileAdminAction } from "./profile/viewProfile/viewProfileAdminAction"
import { formDropdown } from "./form/formDropdown"

// From nav 

export const authenticationAction = (credential, navigate) => {
    return async (dispatch) => {
        dispatch({ type: 'LOGIN_INITIATE' })


        try {
            axiosInstanceWithoutToken.post(`${BServer}/signin`,
                {
                    credential: {
                        email: credential?.email?.toLowerCase(),
                        password: credential?.password
                    }
                }
            ).then((res) => {
                console.log('res', res)
                if (res?.data?.errorCode === 200) {

                    // get formDropdown
                    dispatch(formDropdown())
                    setTimeout(() => {
                        toast.success(res.data.message)
                        dispatch({ type: 'LOGIN_SUCCESSFULLY', payload: res.data.data })
                        if (res?.data?.data?.isCreateProfile) {
                            if (res?.data?.data?.userRole === 'developer') {
                                dispatch(viewProfileDevAction())
                            } else if (res?.data?.data?.userRole === 'agency') {
                                dispatch(viewProfileAgencyAction())
                            } else if (['admin', 'sAdmin'].includes(res?.data?.data?.userRole)) {
                                dispatch(viewProfileAdminAction())
                            }
                        }
                        navigate(res.data.data.navigate)

                    }, 1000);



                } else {
                    dispatch({ type: 'LOGIN_FAILURE' })
                    toast.error(res.data.message)

                }


            })
        } catch (error) {
            console.log('error in authenticationAction', error)
            dispatch({ type: 'LOGIN_FAILURE' })

        }


    }
}