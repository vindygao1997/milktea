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

const Navbar = () => {
    return (
        <>
           <Nav>
           <Bars />

            <NavMenu>
                <NavLink to="/milktea">
                    Milk Tea
                </NavLink>
                <NavLink to="/fruittea">
                    Fruit Tea
                </NavLink>
                <NavLink to="/seasonal">
                    Seasonal
                </NavLink>
                <NavLink to="/freshtea">
                    Fresh Tea
                </NavLink>
                <NavLink to="/cafe">
                    Cafe
                </NavLink>
                <NavLink to="/special">
                    Special
                </NavLink>
            </NavMenu> 
            <NavSearchContainer>
                <NavSearchInput />
                <NavSearchIconButton>
                    <AiOutlineSearch size={26}/>
                </NavSearchIconButton>

            </NavSearchContainer>
           </Nav> 
        </>
    );
};

export default Navbar;