const Toppings = () => {
    return (
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1" />
            <label class="btn btn-outline-secondary" htmlFor="btncheck1">Boba</label>

            <input type="checkbox" class="btn-check" id="btncheck2" />
            <label class="btn btn-outline-secondary" htmlFor="btncheck2">Pudding</label>

            <input type="checkbox" class="btn-check" id="btncheck3" />
            <label class="btn btn-outline-secondary" htmlFor="btncheck3">Salted Cheese Foam</label>
        </div>
    );
};

export default Toppings