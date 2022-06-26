import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    background: #FAF9F9;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
`;

export const FooterLink = styled.div`
    display: flex;
    background: transparent;
    color: #BFC1C3;
    font-size: 15px;
    text-decoration: none;
    padding: 10px;
    align-items: center;
    margin-left: 100px;
    margin-right: 100px;
    
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`;
