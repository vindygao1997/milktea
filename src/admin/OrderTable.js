const OrderTable = (props) => {
    const orderInfo = props.orderInfo;
    return (
    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Order-ID</th>
                            <th scope="col">Drink Name</th>
                            <th scope="col">Sugar Level</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Topping1</th>
                            <th scope="col">Topping2</th>
                            <th scope="col">Topping3</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orderInfo.map(order => (

                        <tr>
                        <th scope="row">{order[0]}</th>
                        <td>{order[1]}</td>
                        <td>{order[2]}</td>
                        <td>{order[3]}</td>
                        <td>{order[4]}</td>
                        <td>{order[5]}</td>
                        <td>{order[6]}</td>
                        <td>{order[7] == 1?"Completed":"To be finished"}</td>
                        </tr>
                                
                    ))}
                    </tbody>
                </table>
    );
};

export default OrderTable