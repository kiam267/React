

const scaleNames = {
  c: 'celsius',
  f: 'fahrenheit'
}
export default function  Teperature({ temperature, scale, onTemperatureChange }) {
  
  

  return (

    <>
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="text" name="" id="" value={temperature} onChange={(e)=> onTemperatureChange(e,scale)}  />

      </fieldset>
    </>
  
  )

}