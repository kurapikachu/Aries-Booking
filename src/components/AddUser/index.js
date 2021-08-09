import React, { Component } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    message
} from 'antd';
import { actUserListAddAPI } from "./modules/action";
import { connect } from "react-redux";


class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
            hoTen: ""
        };
    }

    onFinish = (values) => {
        this.setState({
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
            email: values.email,
            soDt: values.soDt,
            maNhom: "GP01",
            maLoaiNguoiDung: values.maLoaiNguoiDung,
            hoTen: values.hoTen,
        })
        this.props.addAccount(this.state);
        // this.openMessage()
    };

    openMessage = () => {
        const { errorAdd } = this.props;
        if (errorAdd) {
            // message.error({content:"Không thể xóa người dùng "});
            console.log("hi" + errorAdd);
        }
    };

    render() {
        return (

            <div className="card-shadow" style={{ width: 700, margin: '30px auto' }}>

                <Card title="Add a User" bordered={false}>
                    <Form
                        onFinish={(values) => { this.onFinish(values) }}
                    >
                        <Form.Item name="hoTen">
                            <Input placeholder="Enter name" />
                        </Form.Item>
                        <Form.Item
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username',
                                },
                            ]}>
                            <Input placeholder="Enter username" />
                        </Form.Item>
                        <Form.Item
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password',
                                },
                            ]}>
                            <Input.Password placeholder="Enter password" />
                        </Form.Item>
                        <Form.Item name="email">
                            <Input placeholder="Enter email" />
                        </Form.Item>
                        <Form.Item name="soDt">
                            <Input placeholder="Enter phone number" />
                        </Form.Item>
                        <Form.Item
                            name="maLoaiNguoiDung"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose role',
                                },
                            ]}>
                            <Select placeholder="Select Role" allowClear>
                                <Select.Option value="QuanTri">Quan Tri</Select.Option>
                                <Select.Option value="KhachHang">Khach Hang</Select.Option>
                            </Select>
                        </Form.Item>
                        <div className="text-center">
                            <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errorAdd: state.addAccountReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addAccount: (user) => {
            dispatch(actUserListAddAPI(user));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
