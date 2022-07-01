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
import NavbarItem from './NavbarItem';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <NavbarItem endpoint="/milktea" name="Milktea"/>
                <NavbarItem endpoint="/fruittea" name="Fruittea"/>
                <NavbarItem endpoint="/seasonal" name="Seasonal"/>
                <NavbarItem endpoint="/freshtea" name="Fresh Tea"/>
                <NavbarItem endpoint="/coffee" name="Coffee"/>
                <NavbarItem endpoint="/special" name="Special"/>
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