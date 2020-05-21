import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainNav from '../header/MainNav';
import MainFooter from '../footer/MainFooter';

class MainLayout extends Component {
  state = {}
  render() {
    return (
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <MainNav />
          {this.props.children}
          <MainFooter />
        </Col>
      </Row>
    );
  }
}

export default MainLayout;