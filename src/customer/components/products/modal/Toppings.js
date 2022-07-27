import React from 'react';

const Toppings = (props) => {
    const toppingList = ["boba", "pudding", "salted cheese foam"];
    const toppingNames = ["Boba", "Pudding", "Salted Cheese Foam"];


    const handleChange = (position) => {
        const updatedToppings = props.toppings.map((item, index) => (
            index === position? !item : item
        ))
        props.sendToParent(updatedToppings);
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" >
            {toppingList.map((i, index) => (
                <>
                    <input type="checkbox" className="btn-check" checked={false} name="toppings" value={i} id={i} onChange={() => handleChange(index)}/>
                    <label className="btn btn-outline-secondary" htmlFor={i}>{toppingNames[index]}</label>
                </>

            ))}
        </div>
    );
};

export default Toppings