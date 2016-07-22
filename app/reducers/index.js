import {combineReducers} from 'redux'
import MyForm from '../my-form'

const rootReducer = combineReducers({
    ...MyForm.reducers
})

export default rootReducer