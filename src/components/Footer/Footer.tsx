import { StyledContent, StyledFooter } from "./styled";

export function Footer() {
  return (
    <StyledFooter>
      <StyledContent>
        <a href="#" className="left" data-testid="footerLogoLink">
          <img src="./images/museum-logo 2.png" alt="museum logo" />
        </a>
        <a href="#" className="right" data-testid="modsenLogoLink">
          <img src="./images/modsen-logo.png" alt="" />
        </a>
      </StyledContent>
    </StyledFooter>
  );
}
