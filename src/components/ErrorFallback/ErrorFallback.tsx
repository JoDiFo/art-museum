import { ErrorWrapper, H1 } from "./styled";

interface IErrorFallbackProps {
  errorMessage: string;
}

export function ErrorFallback({ errorMessage }: IErrorFallbackProps) {
  const onClick = () => {
    location.reload();
  };

  return (
    <ErrorWrapper>
      <H1>Error occurred:</H1>
      <pre>{errorMessage}</pre>
      <div>
        <span>Try reloading page: </span>
        <button onClick={onClick}>Reload</button>
      </div>
    </ErrorWrapper>
  );
}
