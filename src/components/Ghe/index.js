import React, { Component } from "react";
import { connect } from "react-redux";
import { actChangeSelectGhe } from "../../containers/GuestLayout/BookingPage/modules/action"

class Ghe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isBooked: false,
    }
  }
  componentDidMount() {
    this.setState({ isBooked: this.props.ghe.daDat })
  }
  changeSelected = () => {
    this.setState({ isSelected: !this.state.isSelected }, () => {
      this.props.actChangeSelectGhe(this.props.ghe)
    })
  }
  render() {
    return (
      <>
        <button className={this.state.isBooked ? "ghe reserved" : (this.state.isSelected ? "ghe selected" : "ghe available")} onClick={!this.state.isBooked && this.changeSelected} >
          {this.props.ghe.tenGhe}
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actChangeSelectGhe: (ghe) => {
      dispatch(actChangeSelectGhe(ghe));
    },
  };
};
export default connect(null, mapDispatchToProps)(Ghe);
