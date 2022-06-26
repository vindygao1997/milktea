import {
    ProductContainer,
    ProductImg,
    ProductContent
} from "./ProductElements.js";

function ProductItem(props) {
    const productName = props.name
    const productPrice = props.price
    const productSrc = props.src

    return (
        // <>
        //     <div class="col-md-4">
        //         <img src="..." class="img-fluid rounded-start" alt="..." />
        //     </div>
        //     <div class="col-md-8">
        //         <div class="card-body">
        //             <h5 class="card-title">Card title</h5>
        //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //         </div>
        //     </div>
        // </>


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
            </div>
        </div>    

    );
  };
  
export default ProductItem;