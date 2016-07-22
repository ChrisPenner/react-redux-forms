import Form from '../form'
import {mustMatch} from '../form/validators'

const MyForm = Form('MyForm', ['MyPassword', 'MyPasswordConfirmation', 'one', 'MyButton', 'MultiInput'], {
    'one': {
        value: '42'
    },
    'MyPassword': {
       validators: [mustMatch('MyPasswordConfirmation', 'Confirmation does not match password')],
    },
    'MultiInput': {
       value: [{value: 'Hi'}, {value: 'There'}],
       type: 'MultiInputField'
    }
})

export default MyForm
