

function FunctionAddToChart(props) {
    function addToChart() {
        props.sendAdded(true)
    }
    return (
        <button onClick={addToChart}type="button" class="btn btn-outline-secondary">Add to Cart</button>
    )
}
export default FunctionAddToChart