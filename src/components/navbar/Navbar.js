import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavSearchContainer,
    NavSearchInput,
    NavSearchIconButton
} from "./NavbarElements";
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <>
        //    <Nav>
        //    <Bars />

        //     <NavMenu>
        //         <NavLink to="/home">
        //             Home
        //         </NavLink>
        //         <NavLink to="/milktea">
        //             Milk Tea
        //         </NavLink>
        //         <NavLink to="/fruittea">
        //             Fruit Tea
        //         </NavLink>
        //         <NavLink to="/seasonal">
        //             Seasonal
        //         </NavLink>
        //         <NavLink to="/freshtea">
        //             Fresh Tea
        //         </NavLink>
        //         <NavLink to="/cafe">
        //             Cafe
        //         </NavLink>
        //         <NavLink to="/special">
        //             Special
        //         </NavLink>
        //     </NavMenu> 
        //     <NavSearchContainer>
        //         <NavSearchInput />
        //         <NavSearchIconButton>
        //             <AiOutlineSearch size={26}/>
        //         </NavSearchIconButton>
        //     </NavSearchContainer>
        //    </Nav> 
        // </>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Sharon's Bubble Tea Store</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
            </nav>
    );
};

export default Navbar;