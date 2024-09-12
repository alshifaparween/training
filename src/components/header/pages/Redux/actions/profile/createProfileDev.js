import { nameValueDev } from '../../../assets/initialValues/createProfile'
import { BServer } from '../../../server/backend'
import { axiosInstanceWithToken } from '../../../services/axios/axiosInterceptors'
import {toast} from 'react-toastify'

const createProfileDev = (values,navigate) => {
    return async (dispatch) => {
        // console.log('action values', values)
        const profileData = {

            personalInformation: {
                [nameValueDev.profilePicture]: values.profilePicture,
                [nameValueDev.resume]: values.resume,
                [nameValueDev.fullName]: values.fullName,
                [nameValueDev.dateOfBirth]: values.dateOfBirth,
                [nameValueDev.gender]: values.gender
            },
            currentLocation: {
                [nameValueDev.currentLocation_country]: values.currentLocation_country,
                [nameValueDev.currentLocation_state]: values.currentLocation_state,
                [nameValueDev.currentLocation_district]: values.currentLocation_district,
                [nameValueDev.currentLocation_city]: values.currentLocation_city,
                [nameValueDev.currentLocation_pinCode]: values.currentLocation_pinCode,

            },
            preferredLocation: values.preferredLocation,

            education: {
                [nameValueDev.education_instituteName]: values.education_instituteName,
                [nameValueDev.education_qualification]: values.education_qualification,
                [nameValueDev.education_specializaion]: values.education_specializaion,
                [nameValueDev.education_yearOfPassing]: JSON.parse(values.education_yearOfPassing),

            },
            professionalExperience: {
                [nameValueDev.professionalExperience_currentDesignation]: values.professionalExperience_currentDesignation,
                [nameValueDev.professionalExperience_currentOrganization]: values.professionalExperience_currentOrganization,
                [nameValueDev.professionalExperience_totalExperienceInYear]: values.professionalExperience_totalExperienceInYear,
                [nameValueDev.professionalExperience_totalExperienceInMonth]: values.professionalExperience_totalExperienceInMonth,
                [nameValueDev.professionalExperience_noticePeriodInMonth]: JSON.parse(values.professionalExperience_noticePeriodInMonth),
                [nameValueDev.professionalExperience_skills]: values.professionalExperience_skills,
                [nameValueDev.professionalExperience_projectCompleted]: values.professionalExperience_projectCompleted,
                [nameValueDev.professionalExperience_currentPayout]: values.professionalExperience_currentPayout,
                [nameValueDev.professionalExperience_expectedPayout]: values.professionalExperience_expectedPayout
            },
            social: {
                [nameValueDev.social_linkedin]:values.social_linkedin,
                [nameValueDev.social_git]:values.social_git,

            }

        }

        console.log('profileData',profileData)


        try {
            axiosInstanceWithToken.post(`${BServer}/developer/profile/CREATE`,profileData).then((res)=>{
                console.log('create res',res)
                if(res?.data?.errorCode==200){
                    dispatch({type:'PROFILE_CREATED'})
                    toast.success(res?.data?.message)
                    navigate()
                }else{
                    toast.error(res?.data?.message)
                }
            })
        } catch (error) {
            console.log('error in profile',error)
        }
    }
}

export {createProfileDev}