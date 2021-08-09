import React, {Component} from 'react';
import ModalVideo from 'react-modal-video';
import "./trailer-modal.css";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class TrailerModal extends Component {
    constructor () {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render () {

        return (
            <React.Fragment>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.youtubeID} onClose={() => this.setState({isOpen: false})} />
                <button onClick={this.openModal} className="btn_hover btn-trailer"><i className="fa fa-play mr-2" />TRAILER</button>
            </React.Fragment>
        )
    }
}

export default TrailerModal;