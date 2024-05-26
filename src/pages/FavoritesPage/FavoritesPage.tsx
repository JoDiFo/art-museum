import BookmarkIcon from "assets/orange-bookmark-icon.svg";

import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  StyledH1,
  EmphasizedH1,
} from "./styled";

import { SmallCardContainer } from "components/SmallCardContainer";

function FavoritesPage() {
  return (
    <StyledMain>
      <StyledContent>
        <div>
          <StyledH1>
            here are your <br />
            <EmphasizedH1>
              <BookmarkIcon /> favorites
            </EmphasizedH1>
          </StyledH1>
        </div>
        <section className="favorites-works">
          <div>
            <HeaderSubtext>Saved by you</HeaderSubtext>
            <StyledH2>Your favorites list</StyledH2>
          </div>
          <SmallCardContainer />
        </section>
      </StyledContent>
    </StyledMain>
  );
}

export default FavoritesPage;
