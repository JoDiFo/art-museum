import { StyledContent, StyledFooter } from "./styled";

import museumLogo from "assets/museum-logo 2.png";
import modsenLogo from "assets/modsen-logo.png";

export function Footer() {
  return (
    <StyledFooter>
      <StyledContent>
        <a href="#" className="left" data-testid="footerLogoLink">
          <img src={museumLogo} alt="museum logo" />
        </a>
        <a href="#" className="right" data-testid="modsenLogoLink">
          <img src={modsenLogo} alt="" />
        </a>
      </StyledContent>
    </StyledFooter>
  );
}
