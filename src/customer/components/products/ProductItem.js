import OrderingModal from "./modal/OrderingModal";
import React from "react"

function ProductItem(props) {
    const productName = props.name
    const productPrice = props.price
    const productSrc = props.src

    // const [customInfo, setCustomInfo] = React.useState([])

    // React.useEffect(() => {
    //     props.sendToParent([productName, customInfo])
    // }, [customInfo])
    

    return (

        <div className="card h-100">
             <div className="row justify-content-between">
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{productName}</h5>
                        <p className="card-text">{productPrice}</p>
                    </div>
                </div>
                <div className="col-4">
                    <img src={productSrc} style={{maxWidth:'100%'}}alt="..."/>
                </div>
                <a href="#" className="stretched-link" data-bs-toggle="modal" data-bs-target="#orderingModal"></a>
                <OrderingModal 
                    productName={productName} 
                    />
            </div>
        </div>    

    );
  };
  
export default ProductItem;