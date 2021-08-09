import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd';
import { actUserListUpdateAPI } from "./modules/action";
import { connect } from "react-redux";
const { Option } = Select;

class UserEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
            hoTen: "",
            visible: false
        };
    }
    onFinish = (values) => {
        this.onClose()
        this.setState({
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
            email: values.email,
            soDt: values.soDt,
            maNhom: "GP01",
            maLoaiNguoiDung: values.maLoaiNguoiDung,
            hoTen: values.hoTen,
        })
        this.props.updateAccount(this.state);
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button shape="circle" style={{ background: "#e3c7ff", color: "#6f0dd0", border: "none" }} onClick={this.showDrawer}>
                    <i className="fas fa-pen" />
                </Button>
                <Drawer

                    title="Update User Information"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark onFinish={(values) => { this.onFinish(values) }} on>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="taiKhoan"
                                    label="Username"
                                    initialValue={this.props.account.taiKhoan}
                                    rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                    <Input placeholder="Please enter user name" defaultValue={this.props.account.taiKhoan} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="hoTen"
                                    label="Name"
                                    initialValue={this.props.account.hoTen}
                                    rules={[{ required: true, message: 'Please enter url' }]}
                                >
                                    <Input placeholder="Please enter user name" defaultValue={this.props.account.hoTen} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    initialValue={this.props.account.email}
                                    rules={[{ required: true, message: 'Please select an owner' }]}
                                >
                                    <Input placeholder="Please enter user name" defaultValue={this.props.account.email} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="soDt"
                                    label="Phone number"
                                    initialValue={this.props.account.soDt}
                                    rules={[{ required: true, message: 'Please choose the type' }]}
                                >
                                    <Input placeholder="Please enter user name" defaultValue={this.props.account.soDt} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="matKhau"
                                    label="Password"
                                    initialValue={this.props.account.matKhau}
                                    rules={[{ required: true, message: 'Please choose the approver' }]}
                                >
                                    <Input placeholder="Please enter user name" defaultValue={this.props.account.matKhau} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="maLoaiNguoiDung"
                                    label="Role"
                                    initialValue={this.props.account.maLoaiNguoiDung}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please choose role',
                                        },
                                    ]}>
                                    <Select placeholder="Select Role" defaultValue={this.props.account.maLoaiNguoiDung} allowClear>
                                        <Select.Option value="QuanTri">Quan Tri</Select.Option>
                                        <Select.Option value="KhachHang">Khach Hang</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Item>
                                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                    Cancel
                            </Button>
                                <Button type="primary" htmlType="submit">
                                    Submit
                            </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errorUpdate: state.updateAccountReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAccount: (user) => {
            dispatch(actUserListUpdateAPI(user));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);