import React from 'react';
import {InputField, ButtonField, MultiInputField} from '../form/fields'
import {Input, Button} from '../form/stateless'
import MyForm from './my-form'
import {submit} from './actions'
import {fieldChanged} from '../form/actions'
import {maxLength, required} from '../form/validators'

const KitchenSink = () => (<div> 
    <h1>Kitchen Sink</h1>
    <h2>Example Form</h2>
    <div>Non-form: <Input onChange={(value)=>console.log(value)} /></div>
    <h1>Form</h1>
    <MyForm>
        <InputField onChange={submit} validators={[maxLength(4)]} fieldName="one"/>
        <InputField validators={[required]} fieldName="one"/>
        <div>
            <InputField type="password" fieldName="MyPassword" validators={[required]} />
            <InputField type="password" fieldName="MyPasswordConfirmation" validators={[required]} />
        </div>
        <h2>MultiInput</h2>
        <MultiInputField fieldName="MultiInput" />
        <ButtonField fieldName="MyButton" onClick={submit}>Submit</ButtonField>
    </MyForm>
 </div>)


export default KitchenSink
