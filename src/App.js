import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BarCodeGenerator from "./features/barcodeGenerator/BarCodeGenerator";

class App extends Component {
  render() {
    return <BarCodeGenerator />;
  }
}

export default App;
