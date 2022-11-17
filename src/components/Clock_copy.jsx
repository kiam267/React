
import React from "react";

/* 
 *
 * Lern with sumit --> course 
 * Classs see
 * component + props
 * 
 */


function App({locale}) {
  // function --> component
  return (
  // atake --> element
  <h1 className=''>
      <span>Hellow  {new Date().toLocaleTimeString(locale)}</span>
  </h1>
 );
};


class CApp extends React.Component{
  // class --> component
  render() {
   
      return (
        // atake --> element
        <h1 className=''>
          <span>Hellow - {this.props.children}  {new Date().toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );
  };


};



export default (
  CApp,
  App
);