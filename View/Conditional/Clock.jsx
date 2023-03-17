
import React from "react";
import Button from "./Button";

/* 
 * Lern with sumit --> course 
 * Classs see
 *  Event
 * 
 * 
 * 
 */


// function App({locale}) {
//   // function --> component
//   return (
//   // atake --> element
//   <h1 className=''>
//       <span>Hellow  {new Date().toLocaleTimeString(locale)}</span>
//   </h1>
//  );
// };


class App extends React.Component{
  // class --> component



    constructor(props) {
      super(props);
      
      this.state = { date: new Date(), locale: "bn-BD" };
      
        // { jodi [handleClick] arrow function use na kori tahole ata ai vabe use korte habe ...}
      
      // this.handleClick = this.handleClick.bind(this);
  }

  // states


// Lifecycle Start
  componentDidMount() {
     this.clockTimer =  setInterval(() => {this.trick()},1000);
  };

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  };
  
  // step : 2..
  // handleClick =(locale) =>{
  //   // e.preventDefault();
  //   this.setState({
  //     locale : "locale"
  //   })
  // };


  handleClick =(locale) =>{
    // e.preventDefault();
    this.setState({
      locale,
    })
  };

  // Lifecycle End
  
  trick() {
       this.setState({
          date: new Date()
        });
  };




  render() {
    const { locale } = this.state;


    let button;

    if(locale === "bn-BD") {
      button = (
        <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
      )
    } else {
      button = (
        <Button change={this.handleClick} locale="bn-BD" show enable />
      )
    }
      return (
        // atake --> element
       /*  */
        <div>
          <h1 className=''>
            <span>  {/*Hellow - {this.props.children}*/}   {this.state.date.toLocaleTimeString(locale)}</span>
          </h1>
          {/* jodi paramiter pathate chai tahole ata use korte habe ...  then step : 2 */}

          {/*onClick={() => this.handleClick} */}
        {/*   <Button change={this.handleClick} local="en-Us"/> */}
          {button}        
        </div>
      );
  };


};



export default App;