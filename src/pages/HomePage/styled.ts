import { colors } from "constants/colors";
import { fonts } from "constants/fonts";

import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${colors.BACKGROUND};
`;

export const StyledContent = styled.div`
  width: calc(100% * 2 / 3);
  display: flex;
  flex-direction: column;
`;

export const HeaderSubtext = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 20px;
  color: ${colors.SECONDARY};
  text-align: center;
`;

export const StyledH2 = styled.h2`
  font: ${fonts.HEADER_MD};
  text-align: center;
`;

export const StyledH1 = styled.h1`
  font: ${fonts.HEADER_LG};
  text-align: center;
  text-transform: capitalize;
`;

export const EmphasizedH1 = styled.span`
  color: ${colors.ACCENT};
`;

export const PageHeading = styled.div`
  margin-top: 7.5rem;
`;

export const SearchBarWrapper = styled.div`
  margin-top: 4.5rem;
`;

export const SectionHeading = styled.div`
  margin-bottom: 2.5rem;
`;
