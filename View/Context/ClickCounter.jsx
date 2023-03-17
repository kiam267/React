import React from "react";




class ClickCounter extends React.Component {

  
  render() {
    const { counter, increatementCount } = this.props;
    return (
      <>
        <button type="button" onClick={increatementCount}>Click {counter}</button>
      </>
    )
  }
}


export default ClickCounter;