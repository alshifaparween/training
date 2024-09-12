
import { toast } from "react-toastify";
import { nameValueJobPost } from "../../../assets/initialValues/jobPost";
import { returnAPI } from "../../../services/api/returnApi";
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors";


const appliedJobAction = (props) => {
    return async (dispatch) => {
        // const { authentication } = store.getState();

        console.log('appliedJobAction')
        dispatch({ type: 'APPLIED_JOB_INITIATE' })
        try {

            axiosInstanceWithToken
                .get(
                    returnAPI.viewAppliedJob(props)
                )
                .then((res) => {
                    console.log('response appliedJobAction', res)
                    if (res.status === 200) {
                        dispatch({ type: 'APPLIED_JOB_GET', payload: res?.data?.data  })

                    }

                });
        } catch (error) {
            console.log("error in allJobAction", error);
            dispatch({ type: 'APPLIED_JOB_FAILED' })

        }
    };
};

export { appliedJobAction };

