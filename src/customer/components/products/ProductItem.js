import OrderingModal from "./modal/OrderingModal";
import React from "react"

function ProductItem(props) {
    const productName = props.name
    const productPrice = props.price
    const productSrc = props.src

    const [customInfo, setCustomInfo] = React.useState([])

    React.useEffect(() => {
        props.sendToParent([productName, customInfo])
    }, [customInfo])

    return (

        <div class="card h-100">
             <div class="row justify-content-between">
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">{productName}</h5>
                        <p class="card-text">{productPrice}</p>
                    </div>
                </div>
                <div class="col-4">
                    <img src={productSrc} style={{maxWidth:'100%'}}alt="..."/>
                </div>
                <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#orderingModal"></a>
                <OrderingModal 
                    productName={productName} 
                    sendAddedItem={setCustomInfo}/>
            </div>
        </div>    

    );
  };
  
export default ProductItem;