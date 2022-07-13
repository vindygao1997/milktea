function FunctionAddToChart() {
    function clickHandler() {
        console.log("success")
    }
    return (
        <button onClick={clickHandler}type="button" class="btn btn-outline-secondary">Add to Cart</button>
    )
}
export default FunctionAddToChart