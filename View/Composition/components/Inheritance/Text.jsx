
// import React from 'react';
import Emoji from './Emoji';

/// React say that "this isn't a good practice ";
export default class Text extends Emoji {
  
  constructor(props) {
    super(props);
  }

  render() {
    const decoratedText = this.addEmoji('Iam Javascrpt', '😅');
    console.log(decoratedText)
    return (super.render(decoratedText));
  }

}