import React from "react";




  class Button extends React.Component {
    render() {
      const { change, locale, show , enable} = this.props;
      if (!enable) return  true
      
      return (
        <>
          <button type={"button"} onClick={() => change(locale)} >
            {locale === "bn-BD" ?'Change Clock' : "ঘড়ি পরিবর্তন করুন"}
          </button >
          {show && <p>Hello</p>}
          </>
      )
    }
  }


export default Button;