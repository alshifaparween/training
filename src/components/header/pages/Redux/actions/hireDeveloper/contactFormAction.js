import { toast } from "react-toastify"
import { axiosInstanceWithoutToken } from "../../../services/axios/axiosInterceptors"
import { returnAPI } from "../../../services/api/returnApi"
import { globalModal } from "../globalModal"

export const contactFormAction = (values, sentMessage) => {
    return async (dispatch) => {
        if (!values) {
            console.log('Please provide values')
            toast.error('Please provide required details')
            return -1
        }
        try {
            axiosInstanceWithoutToken.post(returnAPI.contactForm(), values)
                .then((res) => {
                    console.log('response of contactFormAction', res)
                    if (res?.status == 200) {
                        // sentMessage(res?.data?.message)
                        setTimeout(() => {
                            // dispatch(globalModal({ show: false, component: '' }))
                            
                                dispatch(
                                  globalModal({
                                    component: "ContactFormModal",
                                    closeButton: true,
                                    size: "md",
                                    data:{message:res?.data?.data?.message}
                                  })
                                );
                             
                        }, 2000);
                    } else {
                        
                        // toast.error(res?.data?.message)
                        setTimeout(() => {
                            // dispatch(globalModal({ show: false, component: '' }))
                            
                                dispatch(
                                  globalModal({
                                    component: "ContactFormModal",
                                    closeButton: true,
                                    size: "md",
                                    data:{message:res?.data?.data?.message}
                                  })
                                );
                             
                        }, 2000);


                    }
                })
        } catch (error) {
            console.log('error in contactFormAction')
        }
    }
}