const initialState = {
    loading: false,
    countries: [],
    states: [],
    districts: [],
    cities: []
}
export const location = (state = initialState, action) => {
    switch (action.type) {
        case 'LOCATION_INITIATE':
            return { ...state, loading: true }
        case 'LOCATION_COUNTRY_GET':

            const mappedCountries = action?.payload?.map((item) => {
                return { name: item?.countryName, geonameId: item?.geonameId }
            })

            return { ...state, loading: false, countries: mappedCountries }

        case 'LOCATION_STATE_GET':
            const mappedStates = action?.payload?.map((item) => {
                return { name: item?.name, geonameId: item?.geonameId }
            })
            return { ...state, loading: false, states: mappedStates }

        case 'LOCATION_DISTRICT_GET':
            const mappedDistricts = action?.payload?.map((item) => {
                return { name: item?.name, geonameId: item?.geonameId }
            })
            return { ...state, loading: false, districts: mappedDistricts }

        case 'LOCATION_CITY_GET':
            const mappedCities = action?.payload?.map((item) => {
                return { name: item?.name, geonameId: item?.geonameId }
            })
            return { ...state, loading: false, cities: mappedCities }

        case 'LOCATION_GET_FAILED':
            return { ...state, loading: false }

        case 'LOCATION_EMPTY':
            return {
                loading: false,
                countries: [],
                states: [],
                districts: [],
                cities: []
            }
        default:
            return state
    }



}

