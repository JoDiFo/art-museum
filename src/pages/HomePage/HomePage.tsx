import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  StyledH1,
  EmphasizedH1,
} from "./styled";

import { SearchBar } from "components/SearchBar";
import { PaginationContainer } from "components/PaginationContainer";
import { useState } from "react";
import { SortSelector } from "components/SortSelector";
import { OtherWorks } from "components/OtherWorks";

function HomePage() {
  const sortOptions = [
    { value: "title", text: "Alphabet" },
    { value: "date_end", text: "Publication date" },
  ];

  const [searchString, setSearchString] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>(
    sortOptions[0].value,
  );

  return (
    <StyledMain>
      <StyledContent>
        <div>
          <StyledH1>
            let&lsquo;s find some <br />
            <EmphasizedH1>art</EmphasizedH1> here!
          </StyledH1>
          <SearchBar setSearchString={(value) => setSearchString(value)} />
          <SortSelector
            sortOptions={sortOptions}
            selected={selectedSort}
            onSelect={(value) => setSelectedSort(value)}
          />
        </div>
        <section className="gallery">
          <div>
            <HeaderSubtext>Topics for you</HeaderSubtext>
            <StyledH2>Our special gallery</StyledH2>
          </div>
          <PaginationContainer
            searchString={searchString}
            sortOption={selectedSort}
          />
        </section>
        <section className="other-works">
          <div>
            <HeaderSubtext>Here some more</HeaderSubtext>
            <StyledH2>Other works for you</StyledH2>
          </div>
          <OtherWorks />
        </section>
      </StyledContent>
    </StyledMain>
  );
}

export default HomePage;
