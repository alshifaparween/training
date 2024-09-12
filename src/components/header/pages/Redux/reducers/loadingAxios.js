export const loadingAxios = (state = { loading: false }, action) => {
    switch (action.type) {
        case 'AXIOS_PROCESSING':
            return {
                loading: true
            }
        case 'AXIOS_SUCCESS':
            return {
                loading: false
            }
        case 'AXIOS_FAILURE':
            return {
                loading: false
            }

        default:
            return state
    }
}