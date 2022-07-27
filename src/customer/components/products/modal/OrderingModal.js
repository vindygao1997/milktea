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

    
    function resetCustom() {
        setSugarLevel(null);
        setTemperatureLevel(null);
        setToppings(new Array(toppingList.length).fill(false));
    }
    

    return (
        <div className="modal fade" id="orderingModal" tabIndex="-1" aria-labelledby="orderingModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <h5>Sugar Level</h5>
                <SugarLevel sugarLevel={sugarLevel} sendToParent={setSugarLevel}/>
                <hr className="border-2 opacity-50"/>
                <h5>Temperature Level</h5>
                <TemperatureLevel tempLevel={temperatureLevel} sendToParent={setTemperatureLevel}/>
                <hr className="border-2 opacity-50"/>
                <h5>Toppings</h5>
                <Toppings toppings={toppings} sendToParent={setToppings}/>
            </div>
            <div className="modal-footer">
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