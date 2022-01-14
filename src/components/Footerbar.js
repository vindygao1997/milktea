import { 
    FooterContainer,
    Wrapper,
    FooterLink
} from "./FooterElements.js";

const Footerbar = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <FooterLink href="#">Policy</FooterLink>
                <FooterLink href="#">Terms</FooterLink>
                <FooterLink href="#">Copyright</FooterLink>
            </Wrapper>
        </FooterContainer>
        
    );
};

export default Footerbar;