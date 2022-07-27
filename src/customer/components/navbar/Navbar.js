
import NavbarItem from './NavbarItem';
import React from 'react';
import { Cart } from '../../context/Context';

const Navbar = () => {
    //const [numOfItems, setNumOfItems] = React.useState(0);

    // listen to the change of localStorage, once changed, update cart number
    // React.useEffect( () => {
    //     const localCart = localStorage.getItem("cart");
    //     if (localCart) {
    //         setNumOfItems(JSON.parse(localCart).length);
    //     }
    // }, [numOfItems])

    const { cart } = React.useContext(Cart);

    return (
        
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavbarItem endpoint="/milktea" name="Milktea"/>
                    <NavbarItem endpoint="/fruittea" name="Fruittea"/>
                    <NavbarItem endpoint="/seasonal" name="Seasonal"/>
                    <NavbarItem endpoint="/freshtea" name="Fresh Tea"/>
                    <NavbarItem endpoint="/coffee" name="Coffee"/>
                    <NavbarItem endpoint="/special" name="Special"/>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    
                </form>
                </ul>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            <h5>{cart.length}</h5>
            {/* <Link to="/signin"class="btn btn-sm btn-outline-secondary" href="#">Login</Link> */}
        </div>
        </nav>
        
    );
};

export default Navbar;