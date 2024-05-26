import RightArrowIcon from "assets/right-arrow-icon.svg";

import { StyledWrapper, SelectedSpan, StyledSpan } from "./styled";

export function Pagination() {
  return (
    <StyledWrapper>
      <SelectedSpan>1</SelectedSpan>
      <StyledSpan>2</StyledSpan>
      <StyledSpan>3</StyledSpan>
      <StyledSpan>4</StyledSpan>
      <StyledSpan>
        <RightArrowIcon />
      </StyledSpan>
    </StyledWrapper>
  );
}
