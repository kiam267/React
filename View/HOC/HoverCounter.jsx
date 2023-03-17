import React from "react";

import withCounter from "./HOC/withCounter";

function HoveCounter(props) {
  const {count, increatementCount} = props;
  return (
    <>
      <h1 onMouseOver={increatementCount} >Hovered { count} Times</h1>
    </>
  )
}



export default withCounter(HoveCounter);