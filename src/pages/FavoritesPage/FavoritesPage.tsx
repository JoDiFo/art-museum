import bookmarkIcon from "assets/orange-bookmark-icon.svg?url";

import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  StyledH1,
  EmphasizedH1,
  StyledImg,
  SectionHeading,
  PageHeading,
} from "./styled";
import { FavoritesContainer } from "components/FavoritesContainer";

function FavoritesPage() {
  return (
    <StyledMain>
      <StyledContent>
        <PageHeading>
          <StyledH1>
            here are your <br />
            <EmphasizedH1>
              <StyledImg src={bookmarkIcon} alt="" /> favorites
            </EmphasizedH1>
          </StyledH1>
        </PageHeading>
        <section className="favorites-works">
          <SectionHeading>
            <HeaderSubtext>Saved by you</HeaderSubtext>
            <StyledH2>Your favorites list</StyledH2>
          </SectionHeading>
          <FavoritesContainer />
        </section>
      </StyledContent>
    </StyledMain>
  );
}

export default FavoritesPage;
