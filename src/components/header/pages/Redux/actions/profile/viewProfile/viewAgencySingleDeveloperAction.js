const { BServer } = require("../../../../server/backend");
const {
  axiosInstanceWithToken,
} = require("../../../../services/axios/axiosInterceptors");
const { store } = require("../../../store");

exports.viewAgencySingleDeveloperAction = (userIdFromUseLocation) => {
  return async (dispatch) => {
    dispatch({ type: "DEVELOPER_PROFILE_INITIATE" });
    try {
      const { authentication } = store.getState();
      await axiosInstanceWithToken
        .get(`${BServer}/agency/developer/${userIdFromUseLocation}`)
        .then((res) => {
          if (res?.data?.errorCode === 200) {
            
              dispatch({
                type: "DEVELOPER_PROFILE_GET",
                payload: res?.data?.data,
              });
            
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
