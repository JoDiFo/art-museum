import { StyledHeader, Content, RightBlock, StyledLink } from "./styled";

import museumLogo from "@/assets/museum-logo.png";
import bookmarkIcon from "@/assets/yellow-bookmark-icon.svg";

export function Header() {
  return (
    <StyledHeader>
      <Content>
        <div>
          <a href="./home.html" data-testid="LogoLink">
            <img src={museumLogo} alt="museum logo" />
          </a>
        </div>
        <RightBlock>
          <StyledLink href="./favorites.html" data-testid="FavoritesLink">
            <img src={bookmarkIcon} alt="" />
            <span>Your favorites</span>
          </StyledLink>
        </RightBlock>
      </Content>
    </StyledHeader>
  );
}
