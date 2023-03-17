import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

import Counter from "./components/Counter";

function App() {

  return (
    <>
      <Counter>
        {(counter, incrementCount) => (
              <HoverCounter counter={counter} increatementCount={incrementCount} />
          )}
      </Counter>
      
      {/* ai vabe korle habe tabe seketre {state render } nite habe  */}
      {/* <Counter
        
        render{(counter, incrementCount) => (

          <ClickCounter counter={counter} increatementCount={incrementCount} />

        )}
      /> */}


      <Counter>

        {(counter, incrementCount) => (

          <ClickCounter counter={counter} increatementCount={incrementCount} />

        )}
      </Counter>

    </>
     
  );
}



export default App;