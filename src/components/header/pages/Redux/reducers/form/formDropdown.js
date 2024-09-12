const initialState = {
    loading: false,

}
 const formDropdown =  (state = initialState, action) => {

    switch (action.type) {
        case 'FORM_DROPDOWN_INITIATE':
            return { loading: true }
        case 'FORM_DROPDOWN_GET':
            // console.log('action.payload',action.payload)
            return { ...state, loading: false ,...action.payload}

        case 'FORM_DROPDOWN_FAILED':
            return { ...state, loading: false }


        default:
            return state
    }
}
module.exports={formDropdown}