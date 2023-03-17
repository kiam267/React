
import React from "react";

/* 
 *
 * Lern with sumit --> course 
 * Classs see
 * component + props
 * 
 */


function FApp(props, { local }) {
  // function --> component

  return (
  // atake --> element
     
    <h1 className=''>
      <span>Hellow {props.children} {new Date().toLocaleTimeString(local)}</span>
    </h1>
     
 );
};


class CApp extends React.Component{
  // class --> component
  render() {
   
      return (
        // atake --> element
        <h1 className=''>
          <span>Hellow - {this.props.children}  {new Date().toLocaleTimeString(this.props.local)}</span>
        </h1>
      );
  };


};



export {
  CApp,
  FApp
};

