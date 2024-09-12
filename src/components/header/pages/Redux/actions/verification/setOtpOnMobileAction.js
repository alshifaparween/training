import { toast } from "react-toastify"
import { axiosInstanceWithToken, axiosInstanceWithoutToken } from "../../../services/axios/axiosInterceptors"
import { returnAPI } from "../../../services/api/returnApi"
import { globalModal } from "../globalModal"
import { BServer } from "../../../server/backend"
import { formDropdown } from "../form/formDropdown"
import { viewProfileDevAction } from "../profile/viewProfile/viewProfileDevAction"
import { viewProfileAgencyAction } from "../profile/viewProfile/viewProfileAgencyAction"
import { viewProfileAdminAction } from "../profile/viewProfile/viewProfileAdminAction"

export const setOtpOnMobileAction = (mobile, makeStatus) => {
    return async (dispatch) => {
        if (!mobile) {
            toast.error('Please provide mobile number')
            return -1
        }
        try {
            const body = { mobile }
            await axiosInstanceWithToken.post(returnAPI.sentOtpOnMobile(), body)
                .then((res) => {
                    console.log('response setOtpOnMobileAction', res)
                    if (res?.status == 200) {
                        toast.success(res?.data?.message)
                        makeStatus({ status: true })
                    } else {
                        toast.error(res?.data?.message)
                    }
                })
        } catch (error) {
            console.log('error in setOtpOnMobileAction', error)
        }
    }
}



export const verifyOtpFromMobile = (OTP,mobile) => {
    return async (dispatch) => {
        if (!OTP) {
            toast.error('Please provide 6 digit OTP')
            return -1
        }
        try {
            const body = { OTP }

            await axiosInstanceWithToken.post(returnAPI.verifyOtpFromMobile(), body)
                .then((res) => {
                    console.log('response verifyOtpFromMobile', res)
                    if (res?.status == 200) {
                        // toast.success(res?.data?.message)
                        // makeStatus({status:true})
                        dispatch(
                            globalModal({
                                component: "ContactFormModal",
                                closeButton: true,
                                size: "md",
                                data: { message: res?.data?.data?.message }
                            })
                        );
                        dispatch({ type: "MOBILE_VALIDATED" })
                        // dispatch({ type: 'HIDE_MODAL' })

                    } else {
                        dispatch(
                            globalModal({
                                component: "VerifyMobile",
                                closeButton: true,
                                size: "md",
                                data: { message: "Invalid  OTP! Please retry.",mobile:mobile },
                            })
                        );
                        toast.error(res?.data?.message)
                        return -1
                    }

                })
        } catch (error) {
            console.log('error in verifyOtpFromMobile', error)
        }
    }
}


export const sentOtp = (mobile, makeStatus) => {
    return async (dispatch) => {
        if (!mobile) {
            toast.error('Please provide mobile number')
            return -1
        }
        try {
            const body = { mobile,useCase:1 }
            await axiosInstanceWithoutToken.post(`${BServer}/send-otp`, body)
                .then((res) => {
                    console.log('response sentOtp 90', res)
                    if (res?.status == 200) {
                        toast.success(res?.data?.message)
                        makeStatus({ status: true })
                    } else {
                        toast.error(res?.data?.message)
                    }
                })
        } catch (error) {
            console.log('error in sentOtp', error)
        }
    }
}



export const verifyOTPAndLogin = (OTP,mobile,navigate) => {
    return async (dispatch) => {
        if (!OTP) {
            toast.error('Please provide 6 digit OTP')
            return -1
        }
        try {
            const body = { OTP,useCase:1,mobile }
            dispatch({ type: 'LOGIN_INITIATE' })
            await axiosInstanceWithoutToken.post(`${BServer}/signin-with-otp`, body)
                .then((res) => {
                    console.log('response verifyOTPAndLogin', res)
                    if (res?.status == 200) {
                        // // toast.success(res?.data?.message)
                        // // makeStatus({status:true})
                        // dispatch(
                        //     globalModal({
                        //         component: "ContactFormModal",
                        //         closeButton: true,
                        //         size: "md",
                        //         data: { message: res?.data?.data?.message }
                        //     })
                        // );
                        // dispatch({ type: "MOBILE_VALIDATED" })
                        // // dispatch({ type: 'HIDE_MODAL' })

                        dispatch(formDropdown())
                        setTimeout(() => {
                            toast.success(res.data.message)
                            dispatch({ type: 'LOGIN_SUCCESSFULLY', payload: res.data.data })
                            dispatch({ type: 'HIDE_MODAL' })
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
                        dispatch(
                            globalModal({
                                component: "VerifyMobile",
                                closeButton: true,
                                size: "md",
                                data: { message: res?.data?.message,mobile:mobile },
                            })
                        );
                        toast.error(res?.data?.message)
                        return -1
                    }

                })
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' })
            console.log('error in verifyOtpFromMobile', error)
           if(error?.response?.status===400){
            dispatch(
                globalModal({
                    component: "ContactFormModal",
                    closeButton: true,
                    size: "md",
                    data: { message: error?.response?.data?.message,mobile:mobile },
                })
            );
            return -1
           }



        }
    }
}