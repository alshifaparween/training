const { toast } = require("react-toastify")
const { returnAPI } = require("../../../services/api/returnApi")
const { axiosInstanceWithToken } = require("../../../services/axios/axiosInterceptors")
const { allJobAction } = require("./allJobAction")

export const deleteJobAction = (process, _id,callMessage) => {
    return async (dispatch) => {
        toast.success('hello world')
        if (!process || !_id) {
            console.log('process or _id not found')
            return -1
        }
        try {
            await axiosInstanceWithToken.post(
                returnAPI.deleteJob({ _id: _id, process: process })
            ).then((res) => {
                console.log('delete res', res)
                if(res?.status==200){
                    callMessage(res?.data?.message)
                    dispatch(allJobAction({ titleAndDescription: '', skills: '', totalExperienceInYear: '' }))

                }
            })
        } catch (error) {
            console.log('error in deleteJobAction')
        }
    }
}
