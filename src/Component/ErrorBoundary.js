import React, { Component } from 'react';
import { Text } from 'react-native';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI if an error occurs
      return <Text>Oops, something went wrong.</Text>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
