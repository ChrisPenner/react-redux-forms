import React from 'react'
const Select = ({value, options=[]}) => {
    const optionElements = options.map((option, i) => {
        let value, label = option
        if(typeof option === 'object') {
            let {value, label} = option
        } else {
            value = label = option
        }
        return <option key={i} value={value}>{label}</option>
    })
    return (
        <select value={value}>
            {optionElements}
        </select>
)}
export default Select