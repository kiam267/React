import React from "react";

export default class Form extends React.Component {

  state = {
    title: "Javacsript",
    text: "Javacsript is a simple",
    library: "",
    checkbox : true,
    
  }
handelChage = (e) => {
  const mainValu = e.target.value;

  // ai vabe dite o pari...
  // step : 1
  // this.setState({
  //   [e.target.name]: mainValu
  // });

  //step : 2 

  if (e.target.type === 'text') {
      this.setState({
        title: mainValu
      });

  }else if (e.target.type === 'textarea') {
    this.setState({
      text: mainValu
    });
  } else if (e.target.type === 'select-one') {
    this.setState({
      library : mainValu
    })
  } else {
    this.setState({
      checkbox : e.target.checked
    })
  }
  }
  submitHandeler = (e) => {
    const {checkbox,library,text,title} = this.state;
  e.preventDefault();
  console.log(checkbox,library,title,text);
  }
  render() {
    const {checkbox,library,text,title} = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandeler}>
          <input name="text" type="text" placeholder="Enter Your Name" onChange={this.handelChage} value={title} />
          <br />
          <br />
          <input name="text1" type="text" placeholder="Enter Your Name" value={null}/>
          <br />
          <br />
          <textarea name="textarea" onChange={this.handelChage} value={text}></textarea>
          <br />
          <br />
          <select value={library} onChange={this.handelChage}>
            <option value="R">React</option>
            <option value="Anguler">Anguler</option>
          </select>
          <br />
          <br />

          <input type="checkbox" checked={checkbox} onChange={this.handelChage} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}