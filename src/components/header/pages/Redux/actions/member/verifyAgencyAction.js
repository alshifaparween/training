import { toast } from "react-toastify"
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors"
import { returnAPI } from "../../../services/api/returnApi"
import { getAllMemberOfSingleRoleAction } from "./getAllMemberOfSingleRoleAction"
import { store } from "../../store"

export const verifyAgencyAction = (_id, memberId, authorizedAdminId, searchInput, currentPage, itemsPerPage) => {
    return async (dispatch) => {
        const { authentication } = store?.getState()
        if (!_id || !memberId) {
            return toast.error('Something went wrong')
        } else if (authentication?.userRole === 'developer' || authentication?.userRole === 'agency') {
            return toast.error('Only admin is authorized')
        } else if (authentication?.userId !== authorizedAdminId && authentication?.userRole==='admin') {
            return toast.error('You are not the authorized admin')
        }


        try {
            await axiosInstanceWithToken.post(
                returnAPI.verifyAgencyToggle({ _id, memberId })
            )
                .then((res) => {
                    console.log('response verifyAgencyAction', res)
                    toast.success(res?.data?.message)
                    if (res?.status == 200) {
                        dispatch(getAllMemberOfSingleRoleAction('agency', searchInput, currentPage, itemsPerPage))

                    }
                })
        } catch (error) {
            console.log('error in verifyAgencyAction', error)
        }
    }
}