import { toast } from "react-toastify";

const { BServer } = require("../../../server/backend");
const { axiosInstanceWithToken } = require("../../../services/axios/axiosInterceptors");
const { onUploadProgress } = require("../../../services/axios/onUploadProgress");



export const fileUpload = (event, setFieldValue, setValues, values, index) => {
    console.log('event', event)
    return async (dispatch) => {
        const selectedFile = event?.target?.files[0]
        console.log('selectedFile', event?.target?.name, selectedFile)
        if (selectedFile) {

            if (selectedFile.size > 2 * 1024 * 1024) {
                toast.error('File should upto 2 Mb ')
                return -1
            }


            const formData = new FormData();
            formData.append('file', selectedFile, selectedFile.name);
            try {
                await axiosInstanceWithToken.post(`${BServer}/uploadeone`,
                    formData,
                    { onUploadProgress: onUploadProgress }
                ).then(response => {
                    console.log('File uploaded successfully:', response);
                    if (response?.status === 200) {
                        dispatch({ type: 'UPLOADING_FINISHED', payload: { data: response.data?.data, name: event?.target?.name } })
                        if (setValues) {
                            const updatedDocuments = [...values.otherDocuments];
                            updatedDocuments[index].value = response.data?.data?.filename
                            setValues({
                                ...values,
                                otherDocuments: updatedDocuments,
                            });
                        } else {
                            setFieldValue([event?.target?.name], response.data?.data?.filename)

                        }

                    } else {
                        dispatch({ type: 'UPLOADING_FAILED' })

                    }
                })
            } catch (error) {
                dispatch({ type: 'UPLOADING_FAILED' })
                toast.error('')


                console.error(`Error uploading file:${selectedFile.name}`, error);

            }


        }
    }
}