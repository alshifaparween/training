import { toast } from "react-toastify"
import { returnAPI } from "../../../services/api/returnApi"
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors"
import { flattenedDocuments } from "../../../assets/functions/flatTheObject"

export const appliedMemberInAJobAction = (userRole,_id,jobId) => {
    return async (dispatch) => {
        if (!userRole || !_id || !jobId) {
            console.log('Something went wrong appliedMemberInAJobAction -6')
            toast
            .error('Something went wrong')
            return -1
        }
        dispatch({ type: 'APPLIED_MEMBER_IN_A_JOB_INITIATE' })
        try {
            axiosInstanceWithToken.get(returnAPI.appliedMemberSingleJob({ userRole,_id,jobId})).then((res) => {
                console.log('response appliedMemberInAJobAction', res)
                if (res.status === 200) {
                    dispatch({
                        type: 'APPLIED_MEMBER_IN_A_JOB_GET', payload: {
                            count0: res?.data?.data?.count0,
                            count1: res?.data?.data?.count1,
                            documents: res?.data?.data?.profile
                            // flattenedDocuments(res?.data?.data?.profile)
                        }
                    })
                } else {
                    dispatch({ type: 'APPLIED_MEMBER_IN_A_JOB_FAILED' })

                }
            })
        } catch (error) {
            console.log('error in appliedMemberInAJobAction', error)
            dispatch({ type: 'GET_ALL_MEMBER_FAILED' })


        }


    }
}