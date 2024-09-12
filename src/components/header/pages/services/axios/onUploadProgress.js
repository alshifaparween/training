const { store } = require("../../Redux/store");

exports.onUploadProgress = (progressEvent) => {
    console.log('run 2')

    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);



    if (percentCompleted > 0 && percentCompleted <= 1) {
        store.dispatch({
            type: 'START_UPLOADING',
            payload: percentCompleted,
        })
    }
    if (percentCompleted > 1 && percentCompleted < 100) {

        store.dispatch({
            type: 'PROGRESS_UPLOADING',
            payload: percentCompleted,
        })
    } else if (percentCompleted == 100) {
        store.dispatch({
            type: 'COMPLETE_UPLOADING'
        })
    }

}