import React from "react";



const withCounter = (OriginalComponent) => {
  
  class NewComponents extends React.Component { 

     state = {
      count : 0
    }
  
    increatementCount = () => {

      this.setState((prevState) => {
        return ({ count: prevState.count + 1 });
        })
    }


    render() {
      const { count } = this.state;
      return <OriginalComponent count={ count} increatementCount={this.increatementCount} />
    }
  }
  return NewComponents;
}


export default withCounter;