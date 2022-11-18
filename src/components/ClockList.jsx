
import Clock from "./Clock";

function clockList({ quantity = [] }) {
  
  return (
    <div>
      {/* {quantity.map((key) => <Clock key={key} />)} */}
      {quantity.map(() => <Clock key={Math.random()} />)}
  </div>
  );
}


export default clockList;