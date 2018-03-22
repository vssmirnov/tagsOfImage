import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import Dropzone from 'react-dropzone'

class Dashboard extends Component {
    render() {

        let dropzoneRef;

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col sm="12" xl="12">
                        <div>
                            <Dropzone ref={(node) => { dropzoneRef = node; }} onDrop={(accepted, rejected) => { alert(accepted) }}>
                                <p>Drop files here.</p>
                            </Dropzone>
                            <button type="button" onClick={() => { dropzoneRef.open() }}>
                                Open File Dialog
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;
