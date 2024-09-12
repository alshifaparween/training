const { toast } = require("react-toastify")
const { returnAPI } = require("../../../services/api/returnApi")
const { axiosInstanceWithToken } = require("../../../services/axios/axiosInterceptors")
const { appliedJobAction } = require("./appliedJobAction")
const { store } = require("../../store")

const applyToSingleJobAction = (props) => {
    return async (dispatch) => {
        const { _id, jobId } = props
        const {authentication}=store.getState()
        console.log('applyToSingleJobAction props', props)
        if (!props) {
            return toast.error('Something went wrong')
        }
        try {
            axiosInstanceWithToken.post(returnAPI.applyToSingleJob({ ...props })).then((res) => {
                console.log('okkk apply', res)
                if(res?.status===200){
                    dispatch(appliedJobAction({_id:authentication?.userId}))
                }

            })
        } catch (error) {
            console.log('error in applyToSingleJobAction', error)
        }
    }
}

module.exports = { applyToSingleJobAction }