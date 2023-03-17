import React from 'react';
import Button from './Button1';

class Clock extends React.Component {

//       constructor(props) {
//       super(props);
      
//       this.state = { date: new Date(), locale: "bn-BD" };
      
//         // { jodi [handleClick] arrow function use na kori tahole ata ai vabe use korte habe ...}
      
//       // this.handleClick = this.handleClick.bind(this);
//   }
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

// step : 2..
  // handleClick =(locale) =>{
  //   // e.preventDefault();
  //   this.setState({
  //     locale : "locale"
  //   })
  // };
  handleClick = (locale , main) => {
      // e.preventDefault();
      console.log(main);
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock component rendered');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                     {/* jodi paramiter pathate chai tahole ata use korte habe ...  then step : 2 */}

                    {/* onClick={() => this.handleClick} */}
                <Button change={this.handleClick} locale="en-US" main='kiamHasan'/>
                   
            </div>
        );
    }
}

export default Clock;