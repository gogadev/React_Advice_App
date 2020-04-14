import React, { Component } from "react";

import axios from "axios";

import Advice from "./components/advice/Advice";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      advice: "",
    };
  }

  componentDidMount = () => {
    this.getAdvice();
  };

  getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        this.setState({ advice: res.data.slip });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div>
        <Advice advice={advice} getAdvice={this.getAdvice} />
      </div>
    );
  }
}

export default App;
