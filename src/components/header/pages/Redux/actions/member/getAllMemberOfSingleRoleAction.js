import { toast } from "react-toastify"
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors"
import { returnAPI } from "../../../services/api/returnApi"
import { flattenedDocuments } from "../../../assets/functions/flatTheObject"

export const getAllMemberOfSingleRoleAction = (userRole, input, pageNumber, pageSize) => {
    return async (dispatch) => {
        if (!userRole || !pageNumber || !pageSize) {
            console.log('Something went wrong getAllMemberOfSingleRoleAction -6')
            toast.error('Something went wrong')
            return -1
        }
        dispatch({ type: 'GET_ALL_MEMBER_INITIATE' })
        try {
            axiosInstanceWithToken.get(returnAPI.getAllMemberOfSingleRole({ userRole, input, pageNumber, pageSize })).then((res) => {
                console.log('response getAllMemberOfSingleRoleAction', res)
                if (res.status === 200) {
                    dispatch({
                        type: 'GET_ALL_MEMBER_GET', payload: {
                            length: res?.data?.data?.length,
                            documents: flattenedDocuments(res?.data?.data?.documents)
                        }
                    })
                } else {
                    dispatch({ type: 'GET_ALL_MEMBER_FAILED' })

                }
            })
        } catch (error) {
            console.log('error in getAllMemberOfSingleRoleAction', error)
            dispatch({ type: 'GET_ALL_MEMBER_FAILED' })


        }


    }
}