import React from 'react';
const MultiInput = ({errors=[], value=[], onAddValue, ...allProps}) => {
    const errorMessages = errors.map((error, i)=>{
        return <span key={i} style={{color:'red'}}>{error}</span>;
    })
    const listeners = Object.keys(allProps).filter(prop=>prop.startsWith('on'))
    const inputFields = value.map(({value}, index)=> {
        const boundListeners = {}
        listeners.forEach(listener=>{
            boundListeners[listener] = (event)=>allProps[listener](event, {index})
        })
        const props = {...allProps, ...boundListeners}
        return (<input key={index} value={value} {...props} />)
    })
    return (
        <div>
            <div>{inputFields}<button onClick={onAddValue}>+</button></div>
            <span> {errorMessages} </span>

        </div>
    )
}

export default MultiInput