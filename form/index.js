import React from 'react'
import {connect} from 'react-redux'
import {FormReducer, getField} from './reducers'

export const formContextTypes = {
  formName: React.PropTypes.string
}

const Form = (formName, fieldNames, initialState={}) => {
  class Form extends React.Component {
    getChildContext() {
      return {
        formName: formName,
      }
    }
    render() {
      return (
        <div>{this.props.children}</div>
      )
    }
  }
  Form.childContextTypes = formContextTypes
  Form.reducers = {[formName]: FormReducer(formName, fieldNames, initialState)}
  return Form
}
export default Form