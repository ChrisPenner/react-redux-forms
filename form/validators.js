import {getField} from './reducers'
export const maxLength = (maxLength, message) => ({value}) => {
    return value && value.length > maxLength ? message || `Must be less than ${maxLength} characters.` : null
}

export const minLength = (minLength, message) => ({value}) => {
    return value && value.length < minLength ? message || `Must be less than ${minLength} characters.` : null
}

export const required = ({touched, focused, value}) => {
    if (!touched || focused || value) {
        return null
    }
    return 'This field is required'
}

export const mustMatch = (otherFieldName, message) => ({touched, focused, value}, getField) => {
    const {value: otherFieldValue, touched: otherFieldTouched, focused: otherFieldFocused} = getField(otherFieldName)
    if (!otherFieldTouched || !otherFieldValue || otherFieldFocused) {
        return () => null
    }
    if (!value || !touched || focused || value === otherFieldValue) {
        return null
    }
    return message || `Must match ${otherFieldName}!`
}