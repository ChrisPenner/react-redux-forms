import { defaultInputStateFactory } from './input'
import {FIELD_CHANGED, FIELD_FOCUSED, FIELD_BLURRED, ADD_VALUE} from '../actions'

const defaultMultiInputStateFactory= () => ({
    value: [defaultInputStateFactory()],
})

const multiInputReducer = (formName, fieldName, initialState) => (state={...defaultMultiInputStateFactory(), ...initialState}, action) => {
    if(action.formName !== formName || action.fieldName !== fieldName){
        return state
    }
    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,
                value: [...state.value, ''],
            }
        case FIELD_CHANGED:
            return {
                ...state,
                value: state.value.map((inputField, i) => {
                if (i === action.index) {
                    return {...inputField, value: action.value}
                } 
                return inputField
                })
            }
        case FIELD_FOCUSED:
            return {
                ...state, 
                value: state.value.map((inputField, i) => {
                if (i === action.index) {
                    return {...inputField, touched: true, focused: true}
                } 
                return inputField
                })
        }
        case FIELD_BLURRED:
                return {
                    ...state,
                    value: state.value.map((inputField, i) => {
                        if (i === action.index) {
                            return {...inputField, focused: false}
                } 
                return inputField
                })
                }
        default:
            return state;
    }
}
export default multiInputReducer
