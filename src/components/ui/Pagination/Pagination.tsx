import RightArrowIcon from "assets/right-arrow-icon.svg";

import {
  StyledWrapper,
  SelectedSpan,
  StyledSpan,
  PaginationWrapper,
} from "./styled";

interface IPaginationProps {
  currentPage: number;
  setPage: (pageNumber: number) => void;
}

export function Pagination({ currentPage, setPage }: IPaginationProps) {
  const pages = [
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];

  return (
    <PaginationWrapper>
      <StyledWrapper>
        {pages.map((pageNumber) =>
          pageNumber === currentPage ? (
            <SelectedSpan key={pageNumber}>{pageNumber}</SelectedSpan>
          ) : (
            <>
              {pageNumber > 0 && (
                <StyledSpan
                  onClick={() => setPage(pageNumber)}
                  key={pageNumber}
                >
                  {pageNumber}
                </StyledSpan>
              )}
            </>
          ),
        )}
        <StyledSpan onClick={() => setPage(currentPage + 1)}>
          <RightArrowIcon />
        </StyledSpan>
      </StyledWrapper>
    </PaginationWrapper>
  );
}
