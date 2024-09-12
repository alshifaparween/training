import { nameValueAgency } from '../../../assets/initialValues/createProfile'
import { BServer } from '../../../server/backend'
import { axiosInstanceWithToken } from '../../../services/axios/axiosInterceptors'
import { toast } from 'react-toastify'
import { viewProfileAgencyAction } from './viewProfile/viewProfileAgencyAction'
import { store } from '../../store'
import { globalModal } from '../globalModal'

const createProfileAgencyAction = (values, query, navigate) => {
    return async (dispatch) => {
        const {authentication}=store.getState()
        // console.log('action values', values)
        const profileData = {

            personalInformation: {
                [nameValueAgency.profilePicture]: values.profilePicture,
                [nameValueAgency.fullName]: values.fullName,
                [nameValueAgency.description]: values.description,
                [nameValueAgency.email]: values.email

            },

            overview: {
                [nameValueAgency.overview_areaOfExpertise]: values.overview_areaOfExpertise,
                [nameValueAgency.overview_companySize]: values.overview_companySize,
                [nameValueAgency.overview_industrialExperience]: values.overview_industrialExperience,
            },

            location: {
                [nameValueAgency.location_address]: values.location_address,
                [nameValueAgency.location_country]: values.location_country,
                [nameValueAgency.location_state]: values.location_state,
                [nameValueAgency.location_district]: values.location_district,
                [nameValueAgency.location_city]: values.location_city,
                [nameValueAgency.location_pinCode]: values.location_pinCode,

            },


            social: {
                [nameValueAgency.social_linkedin]: values.social_linkedin,
                [nameValueAgency.social_website]: values.social_website,

            },
            documents: {
                [nameValueAgency.documents_registration]: values.documents_registration,
                [nameValueAgency.documents_panCard]: values.documents_panCard,
                [nameValueAgency.documents_gstCertificate]: values.documents_gstCertificate,
                [nameValueAgency.otherDocuments]: values.otherDocuments,

            },
            others:{
                [nameValueAgency.assignVerificationTo]:values.assignVerificationTo
            }

        }

        console.log('profileData', profileData)

        
        try {
            axiosInstanceWithToken.post(`${BServer}/agency/profile/${query}`, profileData).then((res) => {
                console.log('create res', res)
                if (res?.data?.errorCode == 200 &&query==='EDIT' ) {
                    dispatch({ type: "LOCATION_EMPTY" });
                    dispatch({ type: "UPLOADING_CLEAR" });
                    if (authentication?.userRole == 'agency') {
                        dispatch({ type: 'PROFILE_CREATED' })
                        dispatch(viewProfileAgencyAction());
                        toast.success(res?.data?.message);

                        setTimeout(() => {
                            navigate(res?.data?.data?.navigate);
                            console.log('runs settimeout')
                        }, 600);
                    }

                } else if(res?.data?.errorCode == 200 &&query==='CREATE' ){
                    dispatch({ type: "LOCATION_EMPTY" });
                    dispatch({ type: "UPLOADING_CLEAR" });
                    if (authentication?.userRole == 'agency') {
                        // dispatch({ type: 'PROFILE_CREATED' })
                        // dispatch(viewProfileAgencyAction());
                        // toast.success(res?.data?.message);

                        // setTimeout(() => {
                        //     navigate(res?.data?.data?.navigate);
                        // }, 600);

                        dispatch(globalModal({component:'AgencyProfileConfirmation',closeButton:false,data:{message:res?.data?.data?.message}}))
                    }
                }
                else {
                    toast.error(res?.data?.message)
                }
            })
        } catch (error) {
            console.log('error in profile', error)
        }
    }
}

export { createProfileAgencyAction }