import { combineReducers } from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import localStorage from "redux-persist/es/storage"
import { globalModal } from "./globalModal"
import { authentication } from './authentication'
import { onUploadProgress } from './onUploadProgress'
import { viewProfileDev } from './profile/viewProfileDev'
import { viewProfileAgency } from './profile/viewProfileAgency'
import {viewProfileAdmin} from './profile/viewProfileAdmin'
import { location } from './location'
import { fileUpload } from './fileUpload/fileUpload'
import { myProfile } from './profile/myProfile'
import { loadingAxios } from './loadingAxios'
import { viewAgencyAllDeveloper } from './profile/viewAgencyAllDeveloper'
import { viewInHouseAllDeveloper } from './profile/viewInHouseAllDeveloper'
import { allJob } from './job/allJob'
import { singleJob } from './job/singleJob'
import { formDropdown } from './form/formDropdown'
import { appliedJob } from './job/appliedJob'
import {appliedMemberInAJobReducer} from './job/appliedMemberInAJobReducer'
import { getAllMemberOfSingleRoleReducer } from './member/getAllMemberOfSingleRoleReducer'
import { clientListReducer } from './hireDeveloper/clientListReducer'
import { getAllresourceReducer } from "./landingPage/getAllresourceReducer"
const persistConfig = {
    key: 'cariva',
    storage: localStorage
}

const appReducer = combineReducers({

    globalModal,
    authentication,
    onUploadProgress,
    viewProfileDev,
    viewProfileAgency,
    viewProfileAdmin,

    location,
    fileUpload,
    myProfile,
    loadingAxios,
    viewAgencyAllDeveloper,
    viewInHouseAllDeveloper,
    // job
    allJob,
    singleJob,
    appliedJob,
    appliedMemberInAJobReducer,

    // form
    formDropdown,

    // member
    getAllMemberOfSingleRoleReducer,

    // client list
    clientListReducer,

    // landingPage
    getAllresourceReducer

})




const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT_SUCCESSFULLY') {
        console.log('it is running logout')

        state = undefined

    }
    return appReducer(state, action)
}

// combineReducers({

//     globalModal,
//     authentication,
//     onUploadProgress,
//     viewProfileDev,
//     viewProfileAgency,
//     location,
//     fileUpload,
//     myProfile,
//     loadingAxios
// })
export const persistedReducer = persistReducer(persistConfig, rootReducer);

// export { persistedReducer as rootReducer, persistConfig };


