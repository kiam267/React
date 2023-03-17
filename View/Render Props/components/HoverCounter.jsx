function HoverCounter({ counter, increatementCount }) {
  return (
    <>
      <h1 onMouseOver={increatementCount}>Click {counter}</h1>
    </>
  );
}

export default HoverCounter;
