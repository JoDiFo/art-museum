import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { ErrorFallback } from "components/ErrorFallback";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string | undefined;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ message: info.componentStack?.toString() });
    console.log(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <ErrorFallback errorMessage={this.state.message ?? "Unknown error"} />
        </Suspense>
      );
    }

    return this.props.children;
  }
}
