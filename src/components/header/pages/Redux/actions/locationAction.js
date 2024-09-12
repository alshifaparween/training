const { axiosInstanceWithoutToken } = require("../../services/axios/axiosInterceptors")
// const url=`http://api.geonames.org`

const url=`https://secure.geonames.org`
exports.locationAction = (query,geonameId) => {
    return async (dispatch) => {
        dispatch({ type: 'LOCATION_INITIATE' })
        switch (query) {
            case 'COUNTRY':

                try {
                    await axiosInstanceWithoutToken.get(`${url}/countryInfoJSON?username=aryakumar`).then((res) => {
                        // console.log('location country', res)
                        dispatch({ type: 'LOCATION_COUNTRY_GET', payload: res?.data?.geonames })

                    })
                } catch (error) {
                    console.log('error', error)
                }
                break

                case 'STATE':

                try {
                    await axiosInstanceWithoutToken.get(`${url}/childrenJSON?geonameId=${geonameId}&username=aryakumar`).then((res) => {
                        // console.log('location state', res)
                        dispatch({ type: 'LOCATION_STATE_GET', payload: res?.data?.geonames })

                    })
                } catch (error) {
                    console.log('error', error)
                }
                break


                case 'DISTRICT':

                try {
                    await axiosInstanceWithoutToken.get(`${url}/childrenJSON?geonameId=${geonameId}&username=aryakumar`).then((res) => {
                        // console.log('location district', res)
                        dispatch({ type: 'LOCATION_DISTRICT_GET', payload: res?.data?.geonames })

                    })
                } catch (error) {
                    console.log('error', error)
                }
                break


                case 'CITY':

                try {
                    await axiosInstanceWithoutToken.get(`${url}/childrenJSON?geonameId=${geonameId}&username=aryakumar`).then((res) => {
                        // console.log('location city', res)
                        dispatch({ type: 'LOCATION_CITY_GET', payload: res?.data?.geonames })

                    })
                } catch (error) {
                    console.log('error', error)
                }
                break
            default:
                break;
        }
    }
}