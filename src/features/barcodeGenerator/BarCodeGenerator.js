import React, { Component } from "react";
import Barcode from "react-barcode";

class BarCodeGenerator extends Component {
  state = {};
  handlePrint = () => {
    var printContents = document.getElementById("print").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  render() {
    return (
      <div>
        <div
          className="container-fluid"
          id="print"
          style={{ margin: "0 2% 0 2%" }}
        >
          <div className="row" style={{ marginTop: "2%" }}>
            <p style={{ marginLeft: "40px" }}>MUM</p>
          </div>
          <div className="row" style={{ paddingLeft: "15px" }}>
            <div className="col-md-6 col-sm-6 col-xs-6" />
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3" />
              <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                <p> 876786770</p>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                <p> L</p>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3">
                <p>11/1/1019</p>
              </div>
            </div>
          </div>
          <div>SHRI RAJ A.NAGAR</div>
          <div className="row" style={{ paddingLeft: "15px" }}>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p> cr39</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p> 149</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>Digital</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>Prog</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>InstaProg</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>Digi</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>13</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>Aqua</p>
            </div>
          </div>
          <div className="row" style={{ paddingLeft: "15px" }}>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p> 70</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>0</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>-0.50</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>165</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>1.25</p>
            </div>
            <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
              <p>4</p>
            </div>
            <span style={{ float: "right", marginRight: "7%" }}>650004</span>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-sm-6 col-xs-6 col-lg-6"
              style={{ textAlign: "center" }}
            >
              <Barcode
                value="21797203"
                displayValue={false}
                format="CODE39"
                height={40}
                width={1.2}
              />
            </div>

            <div
              className="col-md-6 col-sm-6 col-xs-6 col-lg-6"
              style={{ textAlign: "center" }}
            >
              <Barcode
                value="21797203"
                displayValue={false}
                format="CODE39"
                height={40}
                width={1.2}
              />
            </div>
          </div>
          <div>
            <p style={{ float: "right", marginRight: "7%" }}>Round</p>
          </div>
        </div>
        <button onClick={this.handlePrint}>print</button>
      </div>
    );
  }
}

export default BarCodeGenerator;
