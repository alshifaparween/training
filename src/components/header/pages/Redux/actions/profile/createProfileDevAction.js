import { nameValueDev } from "../../../assets/initialValues/createProfile";
import { BServer } from "../../../server/backend";
import { axiosInstanceWithToken } from "../../../services/axios/axiosInterceptors";
import { toast } from "react-toastify";
import { store } from "../../store";
import { viewProfileDevAction } from "./viewProfile/viewProfileDevAction";
import { returnAPI } from "../../../services/api/returnApi";

const createProfileDevAction = (values, query, navigate, agenciesDevId) => {
  return async (dispatch) => {
    const { authentication } = store.getState();
    const profileData = {
      // agenciesDevId will only receve and will provide when agency try edit there developer
      agenciesDevId: agenciesDevId,
      inHouseDeveloperId: agenciesDevId,
      personalInformation: {
        [nameValueDev.profilePicture]: values.profilePicture,
        [nameValueDev.email]: values.email,
        [nameValueDev.mobile]: values.mobile,
        [nameValueDev.resume]: values.resume,
        [nameValueDev.fullName]: values.fullName,
        [nameValueDev.dateOfBirth]: values.dateOfBirth,
        [nameValueDev.gender]: values.gender,

      },
      currentLocation: {
        [nameValueDev.currentLocation_country]: values.currentLocation_country,
        [nameValueDev.currentLocation_state]: values.currentLocation_state,
        [nameValueDev.currentLocation_district]:
          values.currentLocation_district,
        [nameValueDev.currentLocation_city]: values.currentLocation_city,
        [nameValueDev.currentLocation_pinCode]: values.currentLocation_pinCode,
      },
      preferredLocation: values.preferredLocation,

      education: {
        [nameValueDev.education_instituteName]: values.education_instituteName,
        [nameValueDev.education_qualification]: values.education_qualification,
        [nameValueDev.education_specializaion]: values.education_specializaion,
        [nameValueDev.education_yearOfPassing]: values.education_yearOfPassing,
      },
      professionalExperience: {
        [nameValueDev.professionalExperience_currentDesignation]:
          values.professionalExperience_currentDesignation,
        [nameValueDev.professionalExperience_currentOrganization]:
          values.professionalExperience_currentOrganization,
        [nameValueDev.professionalExperience_totalExperienceInYear]:
          values.professionalExperience_totalExperienceInYear,
        [nameValueDev.professionalExperience_totalExperienceInMonth]:
          values.professionalExperience_totalExperienceInMonth,
        [nameValueDev.professionalExperience_noticePeriodInMonth]:
          values.professionalExperience_noticePeriodInMonth,
        [nameValueDev.professionalExperience_skills]:
          values.professionalExperience_skills,
        [nameValueDev.professionalExperience_projectCompleted]:
          values.professionalExperience_projectCompleted,
        [nameValueDev.professionalExperience_currentPayout]:
          values.professionalExperience_currentPayout,
        [nameValueDev.professionalExperience_expectedPayout]:
          values.professionalExperience_expectedPayout,
      },
      social: {
        [nameValueDev.social_linkedin]: values.social_linkedin,
        [nameValueDev.social_git]: values.social_git,
      },
    };

    try {
      axiosInstanceWithToken
        .post(
          authentication?.userRole === 'developer' ?
            returnAPI.createProfileDev({ userRole: authentication?.userRole, query })
            :
            authentication?.userRole === 'agency' ?
              returnAPI.createProfileDevByAgency({ userRole: authentication?.userRole, query })
              :
              (authentication?.userRole === 'admin' || authentication?.userRole === 'sAdmin') ?
                returnAPI.createProfileDevInHouse({ userRole: 'admin', query })
                : ''

          , profileData)
        .then((res) => {
          if (res?.data?.errorCode == 200 ||res?.status===200) {
            if (authentication?.userRole == "developer") {
              dispatch({ type: "PROFILE_CREATED" });
              dispatch(viewProfileDevAction());
            }
            toast.success(res?.data?.message);
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
      console.log("error in profile", error);
    }
  };
};

export { createProfileDevAction };

