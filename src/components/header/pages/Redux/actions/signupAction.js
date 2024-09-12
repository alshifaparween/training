import { toast } from "react-toastify"
import { axiosInstanceWithoutToken } from "../../services/axios/axiosInterceptors"
import { BServer } from "../../server/backend"

export const signupAction = (email, userRole, navigate) => {

    return async (dispatch) => {
        // toast.success('hii ok')
        console.log('email', email)
        try {
            const result = await axiosInstanceWithoutToken.post(`${BServer}/signup?userRole=${userRole}`, { email: email }).then((res) => {
                console.log('RES 11', res)
                if (res.data.errorCode === 200) {
                    toast.success(res.data.message)
                    setTimeout(() => {
                        toast.success('Please check your email')
                        navigate()

                    }, 2000);

                } else {
                    toast.error(res.data.message)

                }
            })


        } catch (error) {
            console.log(error)

            return error

        }

    }
}
