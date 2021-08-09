import React, { Component } from 'react';
import { Table, Space, Button, message } from 'antd';
import Search from "../Search/search";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actUserListAPI, actUserListDeleteAPI } from "./modules/actions";
import UserEdit from "../UserEdit/UserEdit";
import Loader from "../../components/Loader"

class UserManagement extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.userListAPI();
    }

    deleteUser = (id) => {
        this.props.deleteUserAPI(id)
        this.openMessage()
        // window.location.replace("/dashboard/user")
    }

    openMessage = () => {
        const { errorDelete } = this.props;
        if (errorDelete) {
            message.error({content:"Can not delete this user at the moment"});
        }
    };

    columns = [
        //Column Seq
        {
            title: 'No.',
            dataIndex: '',
            key: '',
        },

        //Column Username
        {
            title: 'Username',
            dataIndex: 'taiKhoan',
            key: 'taiKhoan',
        },

        //Column Full name
        {
            title: 'Full Name',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },

        //Column Email
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        //Column Phone number
        {
            title: 'Phone number',
            dataIndex: 'soDt',
            key: 'soDt',
        },

        //Column Password
        {
            title: 'Password',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },

        //Column Action
        {
            title: 'Management',
            render: (record) => (
                <Space>
                    <Button shape="circle" style={{ background: "#aff4f9", color: "#128f98", border: "none" }}><i className="fa fa-plus" /></Button>
                    <UserEdit account={record} />
                    <Button onClick={() => { this.deleteUser(record.taiKhoan)}} shape="circle" style={{ background: "#baf5c0", color: "#09a519", border: "none" }}><i className="fa fa-trash" /></Button>
                </Space>
            ),
        },
    ];

    render() {
        const loader = this.props.loading;
        if (loader) { return <Loader /> }
        return (
            <div className={"dashboard__content"}>
                <div className="dashboard__card">
                    <div className="card__header">
                        <div className="card__header-title">
                            <h2 className="title">User Management</h2>
                        </div>
                        <div className="card__header-actions">
                            <Search />
                            <Link to={"/dashboard/add-user"} className={"add-btn btn-shadow"} >
                                <span style={{ marginRight: 9 }}>ADD USER </span>
                                <i className="fa fa-plus" />
                            </Link>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__body-wrap">
                            <Table columns={this.columns} dataSource={this.props.userList} style={{ border: '1px solid #f0f0f0' }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state) => {
    return {
        loading: state.userListReducer.loading,
        userList: state.userListReducer.data,
        errorDelete: state.userListReducer.errorDelete
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userListAPI: () => {
            dispatch(actUserListAPI())
        },
        deleteUserAPI: (id) => {
            dispatch(actUserListDeleteAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
