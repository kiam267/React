import React from "react";

export default class Emoji extends React.Component { 
  addEmoji = (text, emoji) => {

    return `${emoji} ${text} ${emoji}`;
  }

  render(overrite) {
    let text = "I am the Emoji Component";

    if (overrite) text = overrite;
    return (
      <>
        {text}
      </>
    )
  }
}