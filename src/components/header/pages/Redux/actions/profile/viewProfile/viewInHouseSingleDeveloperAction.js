const { returnAPI } = require("../../../../services/api/returnApi");
const { axiosInstanceWithToken } = require("../../../../services/axios/axiosInterceptors");

exports.viewInHouseSingleDeveloperAction = (userIdFromUseLocation) => {
    return async (dispatch) => {
        dispatch({ type: "DEVELOPER_PROFILE_INITIATE" });
        try {
            await axiosInstanceWithToken
                .get(
                    returnAPI.getSingleInHouseDeveloper({ userIdFromUseLocation })
                )
                .then((res) => {
                    if (res?.status == 200) {
                        dispatch({
                            type: "DEVELOPER_PROFILE_GET",
                            payload: res?.data?.data?.documents,
                        });

                    } else {
                        dispatch({ type: "DEVELOPER_PROFILE_FAILED" });
                    }
                });
        } catch (error) {
            console.log("error in viewInHouseSingleDeveloperAction", error);
            dispatch({ type: "DEVELOPER_PROFILE_FAILED" });
        }
    };
};