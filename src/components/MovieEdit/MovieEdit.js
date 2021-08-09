import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, } from 'antd';
import { actMovieUpdateAPI } from "./modules/action";
import { connect } from "react-redux";
import formatDate from "../GlobalFunctions/GlobalFunctions";
import moment from "moment";


class MovieEdit extends Component {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.account, {
            visible: false,
            ngayKhoiChieu: moment(this.props.account.ngayKhoiChieu).format('YYYY-MM-DD')
        });
    }

    //Submit button (Edit Movie)
    handleSubmit = (event) => {
        event.preventDefault();
        let make = Object.assign({}, this.props.account, this.state);
        this.props.updateMovie(make);
    }

    //Upload image
    handleFileChange = (e) => {
        const { name, files } = e.target;
        let formVal = {};
        formVal[name] = files[0];
        let obj = Object.assign({}, this.state, formVal);
        this.setState(obj);
    }

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

    //Get input from user => set State
    handleOnChange = (event) => {
        const { name, value } = event.target;
        let formVal = {};
        formVal[name] = value;
        let obj = Object.assign({}, this.state, formVal);
        this.setState(obj);
    }

    render() {
        let objMovie = this.props.account;
        return (
            <div>
                <Button shape="circle" style={{ background: "#e3c7ff", color: "#6f0dd0", border: "none" }} onClick={this.showDrawer}>
                    <i className="fas fa-pen" /></Button>
                <Drawer
                    title="Update Movie Information"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div style={{ textAlign: 'right' }} />
                    }
                >
                    <div className={"dashboard__content"}>
                        <div className="dashboard__card">
                            <div className="card__header">
                                <div className="card__header-title">
                                    <h2 className="title">Fill in new information</h2>
                                </div>
                            </div>
                            <div className="card__body">
                                <div className="card__body-wrap">

                                    {/*    Form*/}
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="tenPhim">Name</label>
                                                <input type="text" className="form-control" value={this.state.tenPhim} name="tenPhim" onChange={this.handleOnChange} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="danhGia">Rating</label>
                                                <input type="text" className="form-control" value={this.state.danhGia} name="danhGia" onChange={this.handleOnChange} />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="trailer">Trailer's link</label>
                                                <input type="text" className="form-control" value={this.state.trailer} name="trailer" onChange={this.handleOnChange} />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label htmlFor="ngayKhoiChieu">Released date</label>
                                                <input type="date" className="form-control" value={this.state.ngayKhoiChieu} name="ngayKhoiChieu" onChange={this.handleOnChange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="moTa">Description</label>
                                            <textarea className="form-control" value={this.state.moTa} rows="3" name="moTa" onChange={this.handleOnChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="hinhAnh">Poster</label>
                                            <input type="file" className="form-control-file" name="hinhAnh" onChange={this.handleFileChange} />
                                        </div>
                                        <div className="btn-submit">
                                            <button className={"btn btn-primary"}>Submit</button>
                                        </div>
                                    </form>
                                    {/*=======Form ======= */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        errorUpdate: state.updateMovieReducer.err,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMovie: (movie) => {
            return dispatch(actMovieUpdateAPI(movie));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);