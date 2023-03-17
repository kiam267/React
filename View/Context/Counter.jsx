import React from "react";


export default class Counter extends React.Component { 


  state = {
        
    counter: 0
    
    }
  increatementCount = () => {
      
          this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }
  render() {
    // const { render } = this.props;
    const { children } = this.props;

    const { counter } = this.state;
    
    return children(counter, this.increatementCount);
  }
}