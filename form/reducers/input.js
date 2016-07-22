import {FIELD_CHANGED, FIELD_FOCUSED, FIELD_BLURRED} from '../actions'
export const defaultInputStateFactory= () => ({
    value: '',
    touched: false,
    focused: false,
})

const inputReducer = (formName, fieldName, initialState) => (state={...defaultInputStateFactory(), ...initialState}, action) => {
    if(action.formName !== formName || action.fieldName !== fieldName){
        return state
    }
    switch (action.type) {
        case FIELD_CHANGED:
            return {...state, value: action.value}
        case FIELD_FOCUSED:
            return {...state, touched:true, focused:true}
        case FIELD_BLURRED:
            return {...state, focused:false}
        default:
            return state;
    }
}
export default inputReducer
