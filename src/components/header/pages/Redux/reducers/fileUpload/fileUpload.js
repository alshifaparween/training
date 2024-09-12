const initialState = {
    loading: false,

}
export const fileUpload = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOADING_INITIATE':

            return {
                ...state, loading: true
            }
        case 'UPLOADING_FINISHED':
            console.log('UPLOADING_FINISHED', action.payload)
            // const latestFile=

            return {
                ...state, loading: false, [action?.payload?.name]: { file: action?.payload?.data?.filename }
            }
        case 'UPLOADING_FAILED':
            return { ...state,loading: false }
        case 'UPLOADING_CLEAR':
            return { loading: false }


        default:
            return state
    }

}