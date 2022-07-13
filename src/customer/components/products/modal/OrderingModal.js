import SugarLevel from './SugarLevel';
import TemperatureLevel from './TemperatureLevel';
import Toppings from './Toppings';
import FunctionAddToChart from './FunctionAddToChart';
const OrderingModal = () => {

    return (
        <div class="modal fade" id="orderingModal" tabIndex="-1" aria-labelledby="orderingModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h5>Sugar Level</h5>
                <SugarLevel />
                <hr class="border-2 opacity-50"/>
                <h5>Temperature Level</h5>
                <TemperatureLevel />
                <hr class="border-2 opacity-50"/>
                <h5>Toppings</h5>
                <Toppings />
            </div>
            <div class="modal-footer">
                <FunctionAddToChart />
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default OrderingModal