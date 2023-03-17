
import React from "react";

/* 
 * Lern with sumit --> course 
 * Classs see
 * component + props
 *  state + lifecycle
 * 
 * 
 * 
 */






class App extends React.Component{
  // class --> component

  // states

  // constructor(props) {
  //   super(props);
  // this.state = {date: new Date()};
  // }

  
  // jodi props state use jodi na kore tahole constructor use karar dorker nai...
  state = {
    date: new Date()
  };


// Lifecycle Start
  componentDidMount() {
     this.clockTimer =  setInterval(() => {this.trick()},1000);
  };

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  };

  // Lifecycle End
  
  trick() {
       this.setState({
          date: new Date()
        });
  };



  render() {
   
      return (
        // atake --> element
        <h1 className=''>
          <span>Hellow - {this.props.children}   {this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      );
  };


};



export default App;