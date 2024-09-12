const initialState = {
    loading: false,
    length:0,
    documents:[]
}

export const appliedJob = (state = initialState, action) => {

    switch (action.type) {
        case 'APPLIED_JOB_INITIATE':

            return { ...state, loading: true }
        case 'APPLIED_JOB_GET':

            return { ...state, loading: false, ...action.payload }
        case 'APPLIED_JOB_FAILED':
            return { ...state, loading: false }

        default:
            return state
    }

}