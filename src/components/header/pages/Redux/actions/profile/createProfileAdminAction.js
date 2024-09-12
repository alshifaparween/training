import { nameValueAdmin } from '../../../assets/initialValues/createProfile'
import { BServer } from '../../../server/backend'
import { axiosInstanceWithToken } from '../../../services/axios/axiosInterceptors'
import { toast } from 'react-toastify'
import { store } from '../../store'
import { returnAPI } from '../../../services/api/returnApi'
import { viewProfileAdminAction } from './viewProfile/viewProfileAdminAction'

const createProfileAdminAction = (values, query, navigate) => {
  return async (dispatch) => {
    // console.log('action values', values)
    const { authentication } = store.getState();

    const profileData = {

      personalInformation: {
        [nameValueAdmin.fullName]: values.fullName,
        [nameValueAdmin.dateOfBirth]: values.dateOfBirth,
        [nameValueAdmin.gender]: values.gender,
        [nameValueAdmin.profilePicture]: values.profilePicture
      },
      currentLocation: {
        [nameValueAdmin.currentLocation_address]: values.currentLocation_address,
        [nameValueAdmin.currentLocation_country]: values.currentLocation_country,
        [nameValueAdmin.currentLocation_state]: values.currentLocation_state,
        [nameValueAdmin.currentLocation_district]: values.currentLocation_district,
        [nameValueAdmin.currentLocation_city]: values.currentLocation_city,
        [nameValueAdmin.currentLocation_pinCode]: values.currentLocation_pinCode,

      },
      professionalExperience: {
        [nameValueAdmin.professionalExperience_currentDesignation]: values.professionalExperience_currentDesignation,
      },
      social: {
        [nameValueAdmin.social_linkedin]: values.social_linkedin,
      }

    }

    console.log('profileData', profileData)


    try {
      axiosInstanceWithToken
        .post(
          returnAPI.createProfileAdmin({ query })
          , profileData)
        .then((res) => {
          if (res?.data?.errorCode == 200) {
            console.log('response', res)
              dispatch({ type: "PROFILE_CREATED" });
              dispatch(viewProfileAdminAction());
            
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
  }
}

export { createProfileAdminAction }