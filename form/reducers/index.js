import {FIELD_CHANGED, FIELD_FOCUSED, FIELD_BLURRED} from '../actions'
import {combineReducers} from 'redux'

import multiInputReducer from './multi-input'
import inputReducer from './input'

const defaultFieldState = {
  value: '',
  touched: false,
  focused: false,
  validators: [],
}
const reducers = {
    ['InputField']: inputReducer,
    ['MultiInputField']: multiInputReducer,
}

export const FormReducer = (formName, fieldNames, initialFormState) => {
    const fieldReducers = {}
    fieldNames.forEach((fieldName) => {
        const {type='InputField', ...initialFieldState} = (initialFormState[fieldName] || {})
        fieldReducers[fieldName] = reducers[type](formName, fieldName, initialFieldState)
    })
    return combineReducers(fieldReducers)
}

export const getField = (state, formName, fieldName) => {
    const field = getForm(state, formName)[fieldName]
    if (!field) {
        throw(`Error:
Couldn't find a field for ${fieldName}',
Is it added to the Form definition?
Do all fields have a fieldName prop?`)
    }
   return field
}

export const getForm = (state, formName) => {
    return state[formName]
}