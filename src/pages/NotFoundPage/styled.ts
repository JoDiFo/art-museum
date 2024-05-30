import { colors } from "constants/colors";
import { fonts } from "constants/fonts";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const H1 = styled.h1`
  font: ${fonts.HEADER_LG};
  font-size: 5rem;
`;

export const HomeLink = styled(Link)`
  text-decoration: underline;
  font: ${fonts.HEADER_MD};
  color: ${colors.SECONDARY};
  font-size: 2.5rem;
`;

export const PageWrapper = styled.div`
  margin-inline: auto;
  width: calc(100% * 2 / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const StyledSpan = styled.span`
  color: ${colors.SECONDARY};
`;
