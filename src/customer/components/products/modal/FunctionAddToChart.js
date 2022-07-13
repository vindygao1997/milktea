import axios from "axios"

function FunctionAddToChart({product, sugarLevel, tempLevel, toppings}) {
    function addToChart() {
        // pass info to shopping cart
    }
    return (
        <button onClick={addToChart}type="button" class="btn btn-outline-secondary">Add to Cart</button>
    )
}
export default FunctionAddToChart