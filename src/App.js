import React, { Component } from "react";
import "./App.scss";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      IsLoginActive: false,
    };
  }
  changeState() {
    const { IsLoginActive } = this.state;
    if (IsLoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.remove("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.remove("right");
    }

    this.setState((prevState) => ({ IsLoginActive: !prevState.IsLoginActive }));
  }

  render() {
    const { IsLoginActive } = this.state;
    const { current } = IsLoginActive ? "Login" : "Register";
    const currentActive = IsLoginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {IsLoginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!IsLoginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default App;
