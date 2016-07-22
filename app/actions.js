
export const SUBMIT = 'SUBMIT'
export const START_SUBMIT = 'START_SUBMIT'
export const DONE_SUBMIT = 'DONE_SUBMIT'

export const submitting = (formName) => ({type: START_SUBMIT, formName})
export const submit = ({formName, ...others}) => (dispatch) => {
    dispatch(submitting(formName))
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    }).then(dispatch.bind(null, {type: DONE_SUBMIT})) 
}