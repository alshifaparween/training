const initialState = {
    show: false,
    component: 'welcome',
    closeButton:true
}
export const globalModal = (state = initialState, action) => {
    // const decideComponent = (type) => {

    // }
    switch (action.type) {
        case 'SHOW_MODAL':
            // decideComponent(action.payload.type)
            // console.log('action.payload',action.payload)
            // return { ...state, show: true, component: action.payload.component ,closeButton:action.payload.closeButton}
            return { show: true, ...action.payload}

        case 'HIDE_MODAL':
            return {  show: false, component: '' }



        default:
            return state
    }
}