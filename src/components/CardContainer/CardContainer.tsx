import { PictureCard } from "components/PictureCard";

import { StyledWrapper } from "./styled";

export function CardContainer() {
  return (
    <StyledWrapper>
      <PictureCard />
      <PictureCard />
      <PictureCard />
    </StyledWrapper>
  );
}
