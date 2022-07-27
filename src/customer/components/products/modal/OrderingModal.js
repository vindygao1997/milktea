import SugarLevel from './SugarLevel';
import TemperatureLevel from './TemperatureLevel';
import Toppings from './Toppings';
import AddToChart from './AddToChart';
import React from 'react';

const OrderingModal = (props) => {

    const toppingList = ["boba", "pudding", "salted cheese foam"];

    const [sugarLevel, setSugarLevel] = React.useState(null);
    const [temperatureLevel, setTemperatureLevel] = React.useState(null);
    const [toppings, setToppings] = React.useState(new Array(toppingList.length).fill(false));

    console.log("topping:", toppings)

    
    function resetCustom() {
        setSugarLevel(null);
        setTemperatureLevel(null);
        setToppings(new Array(toppingList.length).fill(false));
    }
    

    return (
        <div class="modal fade" id="orderingModal" tabIndex="-1" aria-labelledby="orderingModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Sugar Level</h5>
                <SugarLevel sugarLevel={sugarLevel} sendToParent={setSugarLevel}/>
                <hr class="border-2 opacity-50"/>
                <h5>Temperature Level</h5>
                <TemperatureLevel tempLevel={temperatureLevel} sendToParent={setTemperatureLevel}/>
                <hr class="border-2 opacity-50"/>
                <h5>Toppings</h5>
                <Toppings toppings={toppings} sendToParent={setToppings}/>
            </div>
            <div class="modal-footer">
                <AddToChart   
                        product={props.productName} 
                        sugarInfo={sugarLevel} 
                        tempInfo={temperatureLevel} 
                        toppingInfo={toppings}
                        resetCustom={resetCustom}/>
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default OrderingModal