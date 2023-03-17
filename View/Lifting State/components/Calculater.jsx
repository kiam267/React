import React from "react";

import BoilingVerdict from "./BoilingVerdict";
import Teperature from "./Teperature";

import { convert,toCelsius,toFarenheit } from "../lib/converter";


export default class Calculater extends React.Component {
 

state = {temperature: '',scale : ''}

  handleChange = (e, scale) => {
    this.setState({
      
      temperature: e.target.value,
      scale,
    });
  }
  
  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFarenheit) : temperature;


    return (

      <> 
        <Teperature scale="c" temperature={celsius} onTemperatureChange={this.handleChange} />
        <Teperature scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange}/>
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </>
  
    )
  }
}