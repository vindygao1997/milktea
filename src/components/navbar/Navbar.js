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
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <NavLink to="/milktea"class="nav-link active" aria-current="page" href="#">Milktea</NavLink>
                </li>
                <li class="nav-item">
                <NavLink to="/fruittea" class="nav-link active" aria-current="page" href="#">Fruittea</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Seasonal</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Fresh tea</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Coffee</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Special</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <div style={{padding: "0.375rem, 0.75rem"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
            </form>
            </div>
        </div>
        </nav>
        
    );
};

export default Navbar;