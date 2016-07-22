import React from 'react';
const Input = ({errors=[], type, value, onFocus, onBlur, onChange, ...props}) => {
    const errorMessages = errors.map((error, i)=>{
        return <span key={i} style={{color:'red'}}>{error}</span>;
    }) 
    return (
        <div>
            <input 
            type={type} 
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
             />
            <span> {errorMessages} </span>
        </div>
    )
}

export default Input
