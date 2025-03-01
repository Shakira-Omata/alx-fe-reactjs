import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null, 
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
   
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
   
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      
      return (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <p>We apologize for the inconvenience. Please try refreshing the page or navigate back to the home page.</p>
          
          {this.props.resetErrorBoundary && (
            <button 
              onClick={this.props.resetErrorBoundary}
              className="reset-button"
            >
              Try Again
            </button>
          )}
          
          <details className="error-details">
            <summary>View Error Details</summary>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;