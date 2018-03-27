import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import DropzoneDashboard from '../../views/Dashboard/Dropzone';
import ImageDashboard from '../../views/Dashboard/Image';

class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar {...this.props} />
                    <main className="main">
                        <Container fluid>
                            <Switch>
                                <Route path="/dropzone" name="DropzoneDashboard" component={DropzoneDashboard} />
                                <Route path="/image" name="ImageDashboard" component={ImageDashboard} />
                                <Redirect from="/" to="/dropzone" />
                            </Switch>
                        </Container>
                    </main>
                </div>
            </div>
        );
    }
}

export default Full;
