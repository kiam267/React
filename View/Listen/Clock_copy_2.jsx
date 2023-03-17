
import React from "react";
import Button from "./Button";

/* 
 * Lern with sumit --> course 
 * Classs see
 * Lists & Keys
 * 
 * 
 * 
 */




class App extends React.Component{
  // class --> Lists

  // states
   state = { date: new Date(), locale: 'bn-BD' };

// Lifecycle Start
  componentDidMount() {
     this.clockTimer =  setInterval(() => {this.trick()},1000);
  };

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  };
  
  // step : 2..
  handleClick =(locale) =>{
    // e.preventDefault();
    this.setState({
      locale : "locale"
    })
  };


  // handleClick =(locale) =>{
  //   // e.preventDefault();
  //   this.setState({
  //     locale,
  //   })
  // };

  // Lifecycle End
  
  trick() {
       this.setState({
          date: new Date()
        });
  };




  render() {
    const { locale } = this.state;   
      return (
        // atake --> element
       /*  */
        <div>
          <h1 className=''>
            <span>  {this.state.date.toLocaleTimeString(locale)}</span>
          </h1>
       

 
              {locale === 'bn-BD' ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show enable />
          )}
        </div>
      );
  };


};



export default App;