import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import Dropzone from 'react-dropzone'

class DropzoneDashboard extends Component {
    render() {

        let dropzoneRef;

        return (
            <div className="animated fadeIn">
                <div>
                    <Dropzone className="dropzone" ref={(node) => { dropzoneRef = node; }} onDrop={(accepted, rejected) => { alert(accepted) }}>
                        <p>Drop files here.</p>
                    </Dropzone>
                </div>
            </div>
        )
    }
}

export default DropzoneDashboard;
