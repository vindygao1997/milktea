import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #FAF9F9;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    z-index: 12;
`;

export const NavLink = styled(Link)`
color: #201F1F;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color:black;
  font-weight: bold;
}
&:hover {
  color: black;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #FAF9F9;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #201F1F;
  outline: none;
  border: 1px solid #201F1F;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavSearchContainer = styled.div`
  position: absolute;
  right: 100px;
  display: flex;
  align-items: center;
  width: 150px;
  height: 30px;
  padding: 5px;
  background-color: transparent;
  border: none;


`;

export const NavSearchInput = styled.input`
  position: relative;
  height: 100%;
  background: transparent;
  font-size: 16px;
  border: 2px solid #BFC1C3;
  border-radius: 8px;
`;

export const NavSearchIconButton = styled.button`
  position: relative;
  background: transparent;
  border: none;
  align-items: center;

  &:hover {
    color: green;
    cursor: pointer;
  }
`;