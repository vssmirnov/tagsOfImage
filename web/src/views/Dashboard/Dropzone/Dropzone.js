import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import Dropzone from 'react-dropzone'

class DropzoneDashboard extends Component {
    constructor(props) {
        super(props);
    }

    goImage() {
        this.props.history.push('/image');
    }

    render() {
        let dropzoneRef;

        return (
            <div className="animated fadeIn">
                <div>
                    <Dropzone className="dropzone" ref={(node) => { dropzoneRef = node; }} onDrop={(accepted, rejected) => { this.goImage() }}>
                        <p>Drop files here.</p>
                    </Dropzone>
                </div>
            </div>
        )
    }
}

export default DropzoneDashboard;
