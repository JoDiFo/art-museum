import {
  StyledMain,
  StyledContent,
  HeaderSubtext,
  StyledH2,
  StyledH1,
  EmphasizedH1,
  PageHeading,
  SearchBarWrapper,
  SectionHeading,
} from "./styled";

import { SearchBar } from "components/SearchBar";
import { PaginationContainer } from "components/PaginationContainer";
import { useState } from "react";
import { SortSelector } from "components/ui/SortSelector";
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
        <PageHeading>
          <StyledH1>
            let&apos;s find some <br />
            <EmphasizedH1>art</EmphasizedH1> here!
          </StyledH1>
          <SearchBarWrapper>
            <SearchBar setSearchString={(value) => setSearchString(value)} />
          </SearchBarWrapper>
          <SortSelector
            sortOptions={sortOptions}
            selected={selectedSort}
            onSelect={(value) => setSelectedSort(value)}
          />
        </PageHeading>
        <section className="gallery">
          <SectionHeading>
            <HeaderSubtext>Topics for you</HeaderSubtext>
            <StyledH2>Our special gallery</StyledH2>
          </SectionHeading>
          <PaginationContainer
            searchString={searchString}
            sortOption={selectedSort}
          />
        </section>
        <PageHeading>
          <SectionHeading>
            <HeaderSubtext>Here some more</HeaderSubtext>
            <StyledH2>Other works for you</StyledH2>
          </SectionHeading>
          <OtherWorks />
        </PageHeading>
      </StyledContent>
    </StyledMain>
  );
}

export default HomePage;
