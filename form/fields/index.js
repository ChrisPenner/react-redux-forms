import React from 'react'
import {connect} from 'react-redux'
import {Input, Button, MultiInput} from '../stateless'
import {fieldChanged, fieldFocused, fieldBlurred, addValue} from '../actions';
import {compose} from 'redux';
import {getField} from '../reducers'
import {formContextTypes} from '../index'

const fieldListeners = {
    'onChange': fieldChanged,
    'onBlur': fieldBlurred,
    'onFocus': fieldFocused,
    'onAddValue': addValue,
}

const injectFormProps = (Component) => {
    const Wrapped = (props, context) => {
        return <Component {...props} {...context}/>
    }
    Wrapped.contextTypes = formContextTypes
    return Wrapped
} 

// Returns new func that calls all provided funcs with its args.
const tee = (...funcs) => (...args) => {
    return funcs.map((func)=>{
        return func(...args)})
}

// Merges listeners from props and form state to enable dispatching from both in cases of conflict.
const mergeListeners = (propListeners, dispatchers) => {
    const allTypes = {...propListeners, ...dispatchers}
    const mergedListeners = {}
    Object.keys(allTypes).forEach((event)=>{
        if(propListeners[event] && dispatchers[event]){
            mergedListeners[event] = tee(propListeners[event], dispatchers[event])
        } else {
            mergedListeners[event] = propListeners[event] || dispatchers[event]
        }
    })
    return mergedListeners
}

const getListeners = (properties) => {
    const listeners = {}
    const nonListenerProps = {}
    for (const prop in properties){
        if (prop.startsWith('on')){
            listeners[prop] = properties[prop]
        } else {
            nonListenerProps[prop] = properties[prop]
        }
    }
    return [listeners, nonListenerProps]
}

const prepListeners = (formName, fieldName, propListeners, dispatchers) => {
    const allListeners = mergeListeners(propListeners, dispatchers)
    const wrappedListeners = {}
    for (const listener in allListeners) {
        const actionCreator = allListeners[listener]
        const entryPoint = (event, context) => ({value: event.target.value, fieldName, formName, ...context})
        wrappedListeners[listener] = compose(actionCreator, entryPoint)
    }
    return wrappedListeners
}

const mapStateToProps = (state) => ({
    getField: getField.bind(null, state)
})

const mergeProps = ({getField}, dispatchers, {formName, fieldName, validators:propValidators=[], ...ownProps}) => {
    getField = getField.bind(null, formName)
    const {validators: stateValidators=[], value} = getField(fieldName)
    const [propListeners, nonListenerProps] = getListeners(ownProps)
    const allListeners = prepListeners(formName, fieldName, propListeners, dispatchers)
    const allValidators = [...stateValidators, ...propValidators]
    const errors = allValidators.map(validator => validator(getField(fieldName), getField))
                                .filter(e=>e)
    return {
        ...nonListenerProps,
        ...allListeners,
        errors,
        value: value,
    }
}

const FormField = (Component) => injectFormProps(connect(mapStateToProps, fieldListeners, mergeProps)(Component))
export const InputField = FormField(Input)
export const ButtonField = FormField(Button)
export const MultiInputField = FormField(MultiInput)