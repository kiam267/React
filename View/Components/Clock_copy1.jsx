
import React from "react";

/* 
 *
 * Lern with sumit --> course 
 * Classs see
 * component + props
 * 
 */


// function Clock( props,{ local,children }) {
//   // function --> component
//   console.log(props);
//   return (
//   // atake --> element
//   <h1 className=''>
//       <span> Hellow {props.children}  {new Date().toLocaleTimeString(props.local)}</span>
//   </h1>
//  );
// };





class Clock extends React.Component{
  // class --> component
  render() {
   console.log(this.props);
      return (
        // atake --> element
        <h1 className=''>
          <span>Hellow - {this.props.children}  {new Date().toLocaleTimeString(this.props.local)}</span>
        </h1>
      );
  };


};



export default Clock;