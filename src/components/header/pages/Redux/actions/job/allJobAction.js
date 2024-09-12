
import { toast } from "react-toastify";
import { nameValueJobPost } from "../../../assets/initialValues/jobPost";
import { returnAPI } from "../../../services/api/returnApi";
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors";


const allJobAction = (props) => {
    return async (dispatch) => {
        // const { authentication } = store.getState();

        console.log('allJobAction')
        dispatch({ type: 'ALL_JOB_INITIATE' })
        try {

            axiosInstanceWithToken
                .get(
                    returnAPI.viewAllJob(props)
                )
                .then((res) => {
                    console.log('res22', res)
                    if (res.status === 200) {
                        dispatch({ type: 'ALL_JOB_GET', payload: { length: res?.data?.data?.length, documents: res?.data?.data?.documents } })

                    }

                });
        } catch (error) {
            console.log("error in allJobAction", error);
            dispatch({ type: 'ALL_JOB_FAILED' })

        }
    };
};

export { allJobAction };

