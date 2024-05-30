import { H1, HomeLink, PageWrapper, StyledSpan } from "./styled";

function NotFoundPage() {
  return (
    <PageWrapper>
      <H1>
        <StyledSpan>404</StyledSpan> - Page Not Found
      </H1>
      <HomeLink to={"/"}>GO HOME</HomeLink>
    </PageWrapper>
  );
}

export default NotFoundPage;
