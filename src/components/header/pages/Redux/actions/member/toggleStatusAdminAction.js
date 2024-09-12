import { toast } from "react-toastify"
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors"
import { returnAPI } from "../../../services/api/returnApi"
import { getAllMemberOfSingleRoleAction } from "./getAllMemberOfSingleRoleAction"

export const toggleStatusAdminAction = (_id, memberId, userRole,searchInput,currentPage,itemsPerPage) => {
    return async (dispatch) => {
        if (!_id || !memberId || !userRole) {
            return toast.error('Something went wrong')
        }


        try {
            await axiosInstanceWithToken.post(
                returnAPI.toggleStatusAdmin({ _id, memberId })
            )
                .then((res) => {
                    console.log('response toggleStatusAdminAction', res)
                    toast.success(res?.data?.message)
                    if (res?.status==200){
                        dispatch(getAllMemberOfSingleRoleAction(userRole, searchInput, currentPage, itemsPerPage))

                    }
                })
        } catch (error) {
            console.log('error in toggleStatusAdminAction', error)
        }
    }
}