function HoverCounter({counter,increatementCount,theme,switchTheme}) {
   console.log(theme);
  const style = theme === 'dark' ? {'backgroundColor': '#000','color': '#fff'} : null;
    return (
      <>
        <h1 onMouseOver={increatementCount} style={style} >Click {counter}</h1>

        <button type="button" onClick={switchTheme}>
          Change Theme
        </button>
      </>
    )
 
}



export default HoverCounter;