import Bracket from "./components/Composition/Bracket";
import Emoji from "./components/Composition/Emoji";
import Text from "./components/Composition/Text";



function App() {
  return (
    <>
      <Emoji>
        {({ addEmojiC }) => (

          // <Bracket>
          //   {({ addBraket }) => (

          //   )}
          // </Bracket>
              <Text addEmoji={addEmojiC}  />//addBraket={ addBraket}

        )}
      </Emoji>
    </>
  );
}




export default App;