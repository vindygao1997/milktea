import SugarLevel from './SugarLevel';
import TemperatureLevel from './TemperatureLevel';
import Toppings from './Toppings';
import FunctionAddToChart from './FunctionAddToChart';
import React from 'react';

const OrderingModal = ({productName}) => {

    const [sugarLevel, setSugarLevel] = React.useState(null);
    const [temperatureLevel, setTemperatureLevel] = React.useState(null);
    const [toppings, setToppings] = React.useState([]);

    return (
        <div class="modal fade" id="orderingModal" tabIndex="-1" aria-labelledby="orderingModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Sugar Level</h5>
                <SugarLevel toChild={sugarLevel} sendToParent={setSugarLevel}/>
                <hr class="border-2 opacity-50"/>
                <h5>Temperature Level</h5>
                <TemperatureLevel toChild={temperatureLevel} sendToParent={setTemperatureLevel}/>
                <hr class="border-2 opacity-50"/>
                <h5>Toppings</h5>
                <Toppings toChild={toppings} sendToParent={setToppings}/>
            </div>
            <div class="modal-footer">
                <FunctionAddToChart product={productName} sugarInfo={sugarLevel} tempInfo={temperatureLevel} toppingInfo={toppings}/>
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default OrderingModal