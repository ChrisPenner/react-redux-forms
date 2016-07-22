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
        return (<div><input key={index} value={value} {...props} /></div>)
    })
    return (
        <div>
            <MultiInput values={value} /><button onClick={onAddValue}>+</button>
            <span> {errorMessages} </span>

        </div>
    )
}

export default MultiInput