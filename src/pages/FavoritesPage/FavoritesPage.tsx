import bookmarkIcon from "assets/orange-bookmark-icon.svg?url";

import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  StyledH1,
  EmphasizedH1,
  StyledImg,
} from "./styled";
import { FavoritesContainer } from "components/FavoritesContainer";

function FavoritesPage() {
  return (
    <StyledMain>
      <StyledContent>
        <div style={{ marginBottom: "7.5rem", marginTop: "7.5rem" }}>
          <StyledH1>
            here are your <br />
            <EmphasizedH1>
              <StyledImg src={bookmarkIcon} alt="" /> favorites
            </EmphasizedH1>
          </StyledH1>
        </div>
        <section className="favorites-works">
          <div style={{ marginBottom: "2.5rem" }}>
            <HeaderSubtext>Saved by you</HeaderSubtext>
            <StyledH2>Your favorites list</StyledH2>
          </div>
          <FavoritesContainer />
        </section>
      </StyledContent>
    </StyledMain>
  );
}

export default FavoritesPage;
