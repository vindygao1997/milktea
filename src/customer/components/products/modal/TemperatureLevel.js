import React from 'react';

const TemperatureLevel = (props) => {
    
    const tempOptions = ["ice0", "ice50", "ice100"];
    const tempNames = ["No Ice", "Half Ice", "Full Ice"];

    const handleChange = (e) => {
        props.sendToParent(e.target.value);
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            {
                tempOptions.map((option, index) => (
                    <>
                    <input type="radio" className="btn-check" name="temperatureLevel" id={option} value={option} checked={props.tempLevel === option} onChange={handleChange} />
                    <label className="btn btn-outline-secondary" htmlFor={option}>{tempNames[index]}</label>
                    </>
                ))
            }
        </div>
    );

};

export default TemperatureLevel