
import { toast } from "react-toastify";
import { nameValueJobPost } from "../../../assets/initialValues/jobPost";
import { returnAPI } from "../../../services/api/returnApi";
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors";
import { allJobAction } from "./allJobAction";


const createJobAction = (values, query, navigate, _id,jobId) => {
    return async (dispatch) => {
        // const { authentication } = store.getState();
        const profileData = {
            _id:_id,
            jobId:jobId,
            basic: {
                [nameValueJobPost.title]: values.title,
                [nameValueJobPost.description]: values.description,
                [nameValueJobPost.openingType]: values.openingType,
                [nameValueJobPost.openings]: values.openings,

            },
            profession: {
                [nameValueJobPost.domaiOfExpertise]: values.domaiOfExpertise,
                [nameValueJobPost.skills]: values.skills,
                [nameValueJobPost.totalExperienceInYear]: values.totalExperienceInYear,

            },
            amount: {
                [nameValueJobPost.rate]: values.rate,
                [nameValueJobPost.min]: values.min,
                [nameValueJobPost.max]: values.max,

            },
            interval: {
                [nameValueJobPost.start]: values.start,
                [nameValueJobPost.end]: values.end,
            },
            location: {
                [nameValueJobPost.location_country]: values.location_country,
                [nameValueJobPost.location_state]: values.location_state,
                [nameValueJobPost.location_district]: values.location_district,
                [nameValueJobPost.location_city]: values.location_city,
            },
            pointOfContact: {
                [nameValueJobPost.emailTo]: values.emailTo,
                [nameValueJobPost.mobileTo]: values.mobileTo,
            },
            others: {
                [nameValueJobPost.jobType]: values.jobType,
                [nameValueJobPost.shiftType]: values.shiftType,
                [nameValueJobPost.visibility]: values.visibility,
                [nameValueJobPost.benifits]: values.benifits,
                [nameValueJobPost.makeItHot]: values.makeItHot,

            }

        };
        console.log('createJobAction',profileData)
        try {
            axiosInstanceWithToken
                .post(
                    returnAPI.jobPost({ query }),
                    profileData
                )
                .then((res) => {
                    console.log('res60', res)
                    if (res?.status === 200 && res?.data?.errorCode == 200) {

                        toast.success(res?.data?.message);
                        dispatch(allJobAction())
                        dispatch({ type: "LOCATION_EMPTY" });
                        dispatch({ type: "UPLOADING_CLEAR" });

                        setTimeout(() => {
                            navigate(res?.data?.data?.navigate);

                        }, 600);
                    } else {
                        toast.error(res?.data?.message);
                    }
                });
        } catch (error) {
            console.log("error in createJobAction", error);
        }
    };
};

export { createJobAction };

