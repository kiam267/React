import React from "react";
// import ClickCounter from "./components/ClickCounter";
import Section from "./components/Section";

import ThemeContext from "./components/contexts/themeContext";

class App extends React.Component {

  state = {
    theme : 'dark'
  }

  switchTheme = () => {
    this.setState(({ theme }) => {
      console.log(theme);
      if (theme === 'dark') {
        return {
          theme : 'light'
        };
      } 
      else {
        return {
          theme: 'dark'
        }
      } 
    })
  }
  render() {
    const {theme} = this.state;
    return (
      <>
        <ThemeContext.Provider value={{theme , switchTheme: this.switchTheme}}>
        <Section />
        </ThemeContext.Provider>
      </>
    )
  }
 }



export default App;