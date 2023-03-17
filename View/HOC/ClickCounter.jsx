import React from "react";


/// 

// class ClickCounter extends React.Component {

//   state = {
//     count : 0
//   }
//   increatementCount = () => {
//   this.setState((prevState) => {
//     return ({ count: prevState.count + 1 });
//   })
//   }

//   // 28.4 seconds
  
//   render() {
//     const {count} = this.state
//     return (
//       <>
//         <button type="button" onClick={this.increatementCount}>Click {count}</button>
//       </>
//     )
//   }
// }

import withCounter from "./HOC/withCounter";

function ClickCounter(props) {
  const {count, increatementCount} = props
  return (
    <>
      <button type="button" onClick={increatementCount}>Click {count} </button>
    </>
  )
}

export default withCounter(ClickCounter);