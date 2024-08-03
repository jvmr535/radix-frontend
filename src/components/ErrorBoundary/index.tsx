import React, { ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children?: ReactNode;
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  render(): React.ReactNode {
    const { hasError, children } = this.props;

    if (hasError) {
      return <h1>Algo deu errado! Veja os logs para mais detalhe!</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
