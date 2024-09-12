const { BServer } = require("../../../../server/backend");
const { returnAPI } = require("../../../../services/api/returnApi");
const {
  axiosInstanceWithToken,
} = require("../../../../services/axios/axiosInterceptors");
const { store } = require("../../../store");

exports.viewProfileDevAction = (userIdFromUseLocation, category) => {
  console.log('opss it is running viewProfileDevAction')
  console.log('userIdFromUseLocation act', userIdFromUseLocation)
  return async (dispatch) => {
    dispatch({ type: "DEVELOPER_PROFILE_INITIATE" });
    try {
      const { authentication } = store.getState();
      await axiosInstanceWithToken
        .get(
          // `${BServer}/developer/profile/${authentication?.userRole === 'developer' ? authentication.userId : userIdFromUseLocation}`


          // if developer views his profile
          authentication?.userRole === 'developer' ?
            returnAPI.viewProfileDev({ userId: authentication.userId })
            :
            // else if agency views their developers
            authentication?.userRole === 'agency' ?
              returnAPI.viewAgencySingleDeveloper({ userIdFromUseLocation })
              :
              // else if admin or sAdmin wants to view either developer or agecnies developer
              (authentication?.userRole === 'admin' || authentication?.userRole === 'sAdmin') ?
                (
                  category === 'agenciesDeveloper' ?
                    returnAPI.viewAgencySingleDeveloper({ userIdFromUseLocation })
                    :
                    returnAPI.viewProfileDev({ userId: userIdFromUseLocation })
                )
                :
                // else developer views his profile same as 1st
                returnAPI.viewProfileDev({ userId: authentication.userId })
        )
        .then((res) => {
          console.log('res11', res)
          if (res?.data?.errorCode === 200) {
            if (authentication?.userRole == "developer") {
              dispatch({ type: "MY_PROFILE_GET", payload: res?.data?.data });
            } else {
              dispatch({
                type: "DEVELOPER_PROFILE_GET",
                payload: res?.data?.data,
              });
            }
          } else {
            dispatch({ type: "DEVELOPER_PROFILE_FAILED" });
          }
        });
    } catch (error) {
      console.log("error in viewProfileDevAction", error);
      dispatch({ type: "DEVELOPER_PROFILE_FAILED" });
    }
  };
};
