import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  StyledH1,
  EmphasizedH1,
} from "./styled";

import { SearchBar } from "components/SearchBar";
import { SmallCardContainer } from "components/SmallCardContainer";
import { PaginationContainer } from "components/PaginationContainer";

function HomePage() {
  return (
    <StyledMain>
      <StyledContent>
        <div>
          <StyledH1>
            let&lsquo;s find some <br />
            <EmphasizedH1>art</EmphasizedH1> here!
          </StyledH1>
          <SearchBar />
        </div>
        <section className="gallery">
          <div>
            <HeaderSubtext>Topics for you</HeaderSubtext>
            <StyledH2>Our special gallery</StyledH2>
          </div>
          <PaginationContainer />
        </section>
        <section className="other-works">
          <div>
            <HeaderSubtext>Here some more</HeaderSubtext>
            <StyledH2>Other works for you</StyledH2>
          </div>
          <SmallCardContainer />
        </section>
      </StyledContent>
    </StyledMain>
  );
}

export default HomePage;
