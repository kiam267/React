import React from 'react';

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }


  
    render() {
        console.log('button componenet rendered');
        const { change, locale,main } = this.props;
        return (
            <button type="button" onClick={() => change(locale,main)}>
                Click here
            </button>
        );
    }
}

export default Button;