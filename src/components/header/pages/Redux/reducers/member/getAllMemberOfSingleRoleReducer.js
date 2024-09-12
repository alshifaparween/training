const initialState = {
    loading: false,
    length: 0,
    documents: []
}

const getAllMemberOfSingleRoleReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_MEMBER_INITIATE':

            return { ...state, loading: true }

        case 'GET_ALL_MEMBER_GET':

            return { ...state, length: action.payload.length, documents: action.payload.documents, loading: false }
        case 'GET_ALL_MEMBER_FAILED':

            return { ...state, loading: false }
        default:
            return state
    }


}
module.exports={getAllMemberOfSingleRoleReducer}