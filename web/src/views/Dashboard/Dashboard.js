import React, { Component } from 'react';
import {Row, Col, Card} from 'reactstrap';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="12">
            Hello world
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
