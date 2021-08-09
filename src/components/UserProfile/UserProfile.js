import React, { Component } from 'react';
import { Button, Col, Row, Card } from 'antd';
import "./user-profile.css";
import { connect } from "react-redux";
import { actUserInfoAPI } from "./modules/actions";

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const username = localStorage.getItem("User").taiKhoan;
        const usernameAdmin = localStorage.getItem("UserAdmin").taiKhoan;
    }

    render() {
        return (
            <div className="profile-container">
                <div className="profile-content">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: 32 }}>
                        <Col className="gutter-row" span={10}>
                            <div className="profile-card">
                                <Card title="User Information" bordered={false}>
                                    <table className="">
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td>Kurapika</td>
                                            </tr>
                                            <tr>
                                                <td>Username:</td>
                                                <td>Kurapika</td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>mimi@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Phone number:</td>
                                                <td>354325435</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Card>
                                <div className="text-center">
                                    <Button type="primary">Edit</Button>
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={14}>
                            <div className="profile-card">
                                <Card title="History" bordered={false}>
                                    Nothing to show
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfoReducer.data,
        loading: state.userInfoReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (username) => {
            dispatch(actUserInfoAPI(username))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);