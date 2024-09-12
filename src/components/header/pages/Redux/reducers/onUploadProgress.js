const initialState = {
    loadng: false,
    percentCompleted: 0
}
export const onUploadProgress = (state = initialState, action) => {
    switch (action.type) {
        case 'START_UPLOADING':
            console.log('START_UPLOADING')
            return {
                loading: true, percentCompleted: action.payload
            }
        case 'PROGRESS_UPLOADING':
            console.log('PROGRESS_UPLOADING')

            return {
                loading: true, percentCompleted: action.payload
            }

        case 'COMPLETE_UPLOADING':
            console.log('COMPLETE_UPLOADING')

            return {
                loading: false, percentCompleted: 0
            }

        default:
            return state
    }
}