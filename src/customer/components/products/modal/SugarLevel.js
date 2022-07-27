import React from 'react';

const SugarLevel = (props) => {
    const info = ["sugar0", "sugar30", "sugar50", "sugar70", "sugar100"];
    const labels = ["No Sugar", "30% Sugar", "50% Sugar", "70% Sugar", "100% Sugar"];

    
    const onChangeValue = (e) => {
        props.sendToParent(e.target.value);
    }

    return (
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        {info.map((i, index) => (
            <>
            <input type="radio" class="btn-check" name="sugarLevel" id={i} value={i} checked={props.sugarLevel === i} onChange={onChangeValue}/>
            <label class="btn btn-outline-secondary" htmlFor={i}>{labels[index]}</label>
            </>
        ))}
        </div>  
        
        
    )

}

export default SugarLevel