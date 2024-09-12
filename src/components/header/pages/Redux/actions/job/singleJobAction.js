

import { toast } from "react-toastify";
import { nameValueJobPost } from "../../../assets/initialValues/jobPost";
import { returnAPI } from "../../../services/api/returnApi";
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors";


const singleJobAction = (_id,jobId) => {
    return async (dispatch) => {
        // const { authentication } = store.getState();

        console.log('singleJobAction')
        dispatch({ type: 'SINGLE_JOB_INITIATE' })
        try {
            axiosInstanceWithToken
                .get(
                    returnAPI.viewSingleJob({_id,jobId})
                )
                .then((res) => {
                    console.log('res22', res)
                    if (res.status === 200) {
                        dispatch({ type: 'SINGLE_JOB_GET', payload: { length: 1, document: res?.data?.data?.document } })
                    }
                });
        } catch (error) {
            console.log("error in singleJobAction", error);
            dispatch({ type: 'SINGLE_JOB_FAILED' })
        }
    };
};

export { singleJobAction };

