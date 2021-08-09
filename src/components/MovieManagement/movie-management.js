import React, {Component} from 'react';
import {Button, message, Space, Table} from "antd";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import {actMovieDeleteAPI, actNowPlayingMovieAPI} from "../../containers/GuestLayout/HomePage/modules/actions";
import { connect } from "react-redux";
import Loading from "../Loader";
import MovieEdit from "../MovieEdit/MovieEdit";
import formatDate from "../GlobalFunctions/GlobalFunctions";


class MovieManagement extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.movieListAPI()
    }

    deleteMovie = (movieID) => {
        this.props.deleteMovieAPI(movieID);
        this.openMessage()
    }

    openMessage = () => {
        const {errorMovieDelete} = this.props;
        if (errorMovieDelete) {
            message.error({content: "Can not delete this movie at the moment"})
        }
    }

    trailerModal = () => {
        return (
            <div></div>
        )
    }

    columns = [
        {
            title: '',
            key: 'hinhAnh',
            dataIndex: 'hinhAnh',
            render:  (image) => <img src={image} width={40} height={60} style={{borderRadius: '4px'}} alt="poster" />
        },
        {
            title: 'Title',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
        },
        {
            title: 'Code',
            dataIndex: 'biDanh',
            key: 'biDanh',
        },
        {
            title: 'Trailer',
            key: 'trailer',
            dataIndex: 'trailer',
            render: (trailer) => <a href={trailer}>Link</a>
        },
        {
            title: 'Description',
            dataIndex: 'moTa',
            key: 'moTa',
        },
        {
            title: 'Released',
            dataIndex: 'ngayKhoiChieu',
            render: (date) => <span>{formatDate(date)}</span>
        },
        {
            title: 'Ratings',
            dataIndex: 'danhGia',
            key: 'danhGia',
        },
        //Column Action
        {
            title: '',
            key: 'action',
            render: (record) => (
                <Space>
                    <Button shape="circle" style={{background: "#aff4f9", color: "#128f98", border: "none"}}><i className="fa fa-plus" /></Button>
                    <MovieEdit account={record}/>
                    <Button shape="circle" style={{background: "#baf5c0", color: "#09a519", border: "none"}}
                            onClick={() => {this.deleteMovie(record.maPhim)}}>
                        <i className="fa fa-trash" />
                    </Button>
                </Space>
            ),
        },
    ];

    render() {
        const loader = this.props.loading;
        if (loader) { return <Loading />}
        return (
            <div className={"dashboard__content"}>
                <div className="dashboard__card">
                    <div className="card__header">
                        <div className="card__header-title">
                            <h2 className="title">Movie Management</h2>
                        </div>
                        <div className="card__header-actions">
                            <Search />

                            <Link to={"/dashboard/add-movie"} className={"add-btn btn-shadow"} >
                                <span style={{marginRight: 9}}>ADD MOVIE </span>
                                <i className="fa fa-plus" />
                            </Link>
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__body-wrap">
                            <Table columns={this.columns} dataSource={this.props.movieList} style={{border: '1px solid #f0f0f0'}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.listNowPlayingReducer.loading,
        movieList: state.listNowPlayingReducer.data,
        errorMovieDelete: state.listNowPlayingReducer.errorMovieDelete
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        movieListAPI: () => {
            dispatch(actNowPlayingMovieAPI());
        },
        deleteMovieAPI: (movieID) => {
            dispatch(actMovieDeleteAPI(movieID))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieManagement);