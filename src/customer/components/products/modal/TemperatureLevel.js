const TemperatureLevel = () => {
    return (
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" />
            <label class="btn btn-outline-secondary" htmlFor="btnradio1">No Ice</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
            <label class="btn btn-outline-secondary" htmlFor="btnradio2">Half Ice</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
            <label class="btn btn-outline-secondary" htmlFor="btnradio3">Full Ice</label>
        </div>
    )

}

export default TemperatureLevel