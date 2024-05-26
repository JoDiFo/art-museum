import { StyledHeader, Content, RightBlock, StyledLink } from "./styled";

import museumLogo from "assets/museum-logo.png";
import BookmarkIcon from "assets/yellow-bookmark-icon.svg";
import HomeIcon from "assets/home-icon.svg";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <StyledHeader>
      <Content>
        <div>
          <StyledLink to="/" data-testid="headerLogoLink">
            <img src={museumLogo} alt="museum logo" />
          </StyledLink>
        </div>
        <RightBlock>
          {location.pathname === "/" ? null : (
            <StyledLink to="/" data-testid="homeLink">
              <HomeIcon />
              <span>Home</span>
            </StyledLink>
          )}
          <StyledLink to="/favorites" data-testid="favoritesLink">
            <BookmarkIcon />
            <span>Your favorites</span>
          </StyledLink>
        </RightBlock>
      </Content>
    </StyledHeader>
  );
}
