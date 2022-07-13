import React from 'react';

const Toppings = (props) => {
    const toppingList = ["boba", "pudding", "salted cheese foam"];
    const toppingNames = ["Boba", "Pudding", "Salted Cheese Foam"];

    const [toppingStates, setToppingStates] = React.useState(
        new Array(toppingList.length).fill(false)
    );

    const handleChange = (position) => {
        const updatedToppings = toppingStates.map((item, index) => (
            index === position? !item : item
        ))
        props.sendToParent(updatedToppings);
        setToppingStates(updatedToppings);
    }

    return (
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" >
            {toppingList.map((i, index) => (
                <>
                    <input type="checkbox" class="btn-check" id={i} value={i} onChange={() => handleChange(index)}/>
                    <label class="btn btn-outline-secondary" htmlFor={i}>{toppingNames[index]}</label>
                </>

            ))}
        </div>
    );
};

export default Toppings