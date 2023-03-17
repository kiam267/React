import ThemeContext from "./contexts/themeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
      
      return (
            <>
                  <h1>This is Content</h1>
                  <Counter>
                        {(counter, increatementCount) => (
                              <ThemeContext.Consumer>
                                    {({ theme, switchTheme}) => (
                                          <HoverCounter
                                            counter={counter}
                                            increatementCount={increatementCount}
                                            theme={theme} 
                                            switchTheme={switchTheme}    
                                    />
                                )}
                              </ThemeContext.Consumer>
                        )}
                  </Counter>
                 
            </>
      )
}