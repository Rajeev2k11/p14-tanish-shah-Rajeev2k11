import React from 'react';


export function WithLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component is rendered`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}