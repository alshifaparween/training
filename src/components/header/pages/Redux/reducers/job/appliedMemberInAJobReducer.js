const initialValue = {
    loading: false,
    count0: 0,
    count1: 0,
    documents: []
}
const appliedMemberInAJobReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'APPLIED_MEMBER_IN_A_JOB_INITIATE':

            return { ...state, loading: true }
        case 'APPLIED_MEMBER_IN_A_JOB_GET':

            return {
                ...state,
                count0: action?.payload?.count0,
                count1: action?.payload?.count1,
                documents: action?.payload?.documents,
                loading: true
            }

        case 'APPLIED_MEMBER_IN_A_JOB_FAILED':

            return { ...state, loading: false }
        default:
            return state
    }

}
module.exports = { appliedMemberInAJobReducer }