import { toast } from "react-toastify"
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors"
import { returnAPI } from "../../../services/api/returnApi"
import { flattenedDocuments } from "../../../assets/functions/flatTheObject"

export const getClientListAction = ( input, pageNumber, pageSize) => {
    return async (dispatch) => {
        if ( !pageNumber || !pageSize) {
            console.log('Something went wrong getClientListAction -9')
            toast.error('Something went wrong')
            return -1
        }
        dispatch({ type: 'GET_ALL_CLIENT_INITIATE' })
        try {
            axiosInstanceWithToken.get(returnAPI.getClientList({ input, pageNumber, pageSize })).then((res) => {
                console.log('response getClientListAction', res)
                if (res.status === 200) {
                    dispatch({
                        type: 'GET_ALL_CLIENT_GET', payload: {
                            length: res?.data?.data?.length,
                            // documents: flattenedDocuments(res?.data?.data?.documents)
                            documents: res?.data?.data?.documents

                        }
                    })
                } else {
                    dispatch({ type: 'GET_ALL_CLIENT_FAILED' })

                }
            })
        } catch (error) {
            console.log('error in getClientListAction', error)
            dispatch({ type: 'GET_ALL_CLIENT_FAILED' })


        }


    }
}