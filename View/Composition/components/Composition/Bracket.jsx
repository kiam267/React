import React from "react";

export default class Emoji extends React.Component { 
  addBraket = (text) => {

    return `[${text}]`;
  }

  render() {
    return this.props.children({addBraket: this.addBraket});
  }
}