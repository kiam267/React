
import Clock from "./Clock_copy_2";

function clockList({ quantity = [] }) {
  
  return (  
    <div>
      {/* {quantity.map((key) => <Clock key={key} />)} */}
      {quantity.map(() => <Clock key={Math.random()} />)}
   
  </div>
  );
}


export default clockList;