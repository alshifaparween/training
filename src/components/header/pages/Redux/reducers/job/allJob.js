const initialState = {
    loading: false,
    length: 0,
    jobs: []
}

export const allJob = (state = initialState, action) => {

    switch (action.type) {
        case 'ALL_JOB_INITIATE':

            return { ...state, loading: true }
        case 'ALL_JOB_GET':

            return {
                ...state,
                loading: false,
                length:  action.payload.length,
                jobs: action.payload?.documents
            }
        case 'ALL_JOB_FAILED':
            return { ...state, loading: false }

        default:
            return state
    }

}