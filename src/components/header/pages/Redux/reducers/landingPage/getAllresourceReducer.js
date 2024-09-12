const initialState = {
    loading: false,
    documents: []
}

const getAllresourceReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_ALL_RESOURCE_INITIATE':
            return { ...state, loading: true }

        case 'GET_ALL_RESOURCE_GET':
            return { ...state, documents: action.payload.documents, loading: false }

        case 'GET_ALL_RESOURCE_FAILED':
            return { ...state, loading: false }


        default:
            return state
    }
}

module.exports={getAllresourceReducer}