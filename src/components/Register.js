import React, { Component } from "react";
import loginImage from "./login.svg";
import "./styles.css";
export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Regiser</div>
        <div className="content">
          <div className="image">
            <img src={loginImage} alt="" srcset="" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <button type="button" className="btn">
          Login
        </button>
      </div>
    );
  }
}
