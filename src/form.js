import React from "react";
import image from './avatar.png'


const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    //let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (

        <div className="loginbox">
        <img src={image} className="avatar"/>

      <form onSubmit={this.handleSubmit}>
        <div>
        <p>Username</p>
         <input type="text" name="name" placeholder="Enter Username"
        value={this.state.name}
        onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        <div>
        <p>E-mail Address</p>
            <input type="text" name="email" placeholder="Enter email address"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
        <p>Password</p>
            <input type="password" name="password" placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>

          <div>
          <p>Comments</p>
            <textarea cols="35"rows="5"name=""/>
            </div>

        </div>

        <input type="submit" name="" value="Send" />
            <input type="submit" name="" value ="Reset"/>
      </form>


</div>

    );
  }
}