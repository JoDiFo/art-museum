import {
  StyledHeader,
  Content,
  RightBlock,
  StyledLink,
  BurgerWrapper,
} from "./styled";

import museumLogo from "assets/museum-logo.png";
import BookmarkIcon from "assets/yellow-bookmark-icon.svg";
import HomeIcon from "assets/home-icon.svg";
import { useLocation } from "react-router-dom";
import { BurgerMenu } from "components/BurgerMenu";
import { useState } from "react";
import { ModalMenu } from "components/ModalMenu";

export function Header() {
  const location = useLocation();

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

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
        <BurgerWrapper>
          <BurgerMenu isActive={showMenu} onClick={handleClick} />
        </BurgerWrapper>
        {showMenu ? (
          <ModalMenu onClick={(value) => setShowMenu(value)} />
        ) : null}
      </Content>
    </StyledHeader>
  );
}
