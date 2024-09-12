const initialState = {
    loading: false,
    length: 0,
    job: {}
}

export const singleJob = (state = initialState, action) => {

    switch (action.type) {
        case 'SINGLE_JOB_INITIATE':

            return { ...state, loading: true }
        case 'SINGLE_JOB_GET':

            return { ...state, loading: false, length: action.payload.length, job: action.payload?.document }
        case 'SINGLE_JOB_FAILED':
            return { ...state, loading: false }

        default:
            return state
    }

}