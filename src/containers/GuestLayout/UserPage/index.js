//Sign Up page for guests

import React, { Component } from "react";
import { actAddUserApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import "./sign-up-page.css";
import {Link} from "react-router-dom";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    console.log(e.data);
  };

  renderNoti = () => {
    const { error } = this.props;
    if (error) {
      if (error.response && error.response.status === 401)
        return <div className="alert alert-danger">Chua co token</div>;
      if (error.response && error.response.data) {
        return <div className="alert alert-danger">{error.response.data}</div>;
      }
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
        <div className="main_form_body">
          <div className="form__wrapper sign-up">
            <div className="form__container">
              {/* Form body */}
              <div className="form__body-wrapper ">
                <form className="form__content" onSubmit={this.handleSubmit}>
                  <span className="form__title">Sign Up</span>
                  {this.renderNoti()}
                  <div className="wrap__input">
                    <input className="input" type="text" name="hoTen" placeholder="Full Name"
                           onChange={this.handleOnChange} />
                  </div>
                  <div className="wrap__input">
                    <input className="input" type="text" name="taiKhoan" placeholder="Username"
                           onChange={this.handleOnChange} />
                  </div>
                  <div className="wrap__input">
                    <input className="input" type="password" name="matKhau" placeholder="Password"
                           onChange={this.handleOnChange} />
                  </div>
                  <div className="wrap__input">
                    <input className="input" type="password" name="matKhau" placeholder="Confirm Password"
                           onChange={this.handleOnChange} />
                  </div>

                  <div className="wrap__input">
                    <input className="input" type="email" name="email" placeholder="Email"
                           onChange={this.handleOnChange} />
                  </div>
                  <div className="wrap__input">
                    <input className="input" type="text" name="soDt" placeholder="Phone number"
                           onChange={this.handleOnChange} />
                  </div>
                  <div className="form__button-container">
                    <div className="form__button-wrap">
                      <div className="form__button-bg"/>
                      <button className="form__button-btn" type="submit">Join</button>
                    </div>
                  </div>
                  <div className="form__button-sign-in">
                    <Link to={"/login"}>Do this later</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.addUserReducer.loading,
    error: state.addUserReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(actAddUserApi(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
