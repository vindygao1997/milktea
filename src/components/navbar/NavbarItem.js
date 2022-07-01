import {NavLink} from "./NavbarElements";

const NavbarItem = (props) => {
    return (
        <li class="nav-item">
            <NavLink to={props.endpoint} class="nav-link active" aria-current="page" href="#">{props.name}</NavLink>
        </li>
    )
}

export default NavbarItem;