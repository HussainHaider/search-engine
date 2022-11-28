import React, { ErrorInfo, ReactElement } from 'react';

interface Props {
  children: ReactElement | null;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null
}

/**
 * Error boundaries are React components that catch JavaScript errors anywhere in their
 * child component tree, log those errors, and display a fallback UI instead of the component tree that crashed
 */
class ErrorBoundary extends React.PureComponent<Props, State> {
  /**
   * The constructor of the Component
   * @param {Object} props inputs of the component
   */
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  /**
   * This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters:
   * @param {Object} error The error that was thrown.
   * @param {object} errorInfo  An object with a componentStack key containing information about which
   * component threw the error.
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  /**
   * It return the fallback UI if there is a bug.
   * @return {Object} return react elements which include JSX
   */
  render(): ReactElement | null {
    const { children } = this.props;
    if (this.state.errorInfo) {
      // Error path
      return (<h1>Something went wrong.</h1>);
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;
