import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout, { Header, Content, Footer } from 'antd/lib/layout';
import Menu, { Item as MenuItem } from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb';

import { Link } from 'teardrop';

import 'antd/dist/antd.css';
import './DataContainer.css';

class DataContainer extends Component {
  static contextTypes = {
    breadcrumb: PropTypes.object,
    router: PropTypes.object
  }
  render() {
    const { breadcrumb } = this.context;

    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <h1><Link to="/">Will Hackett</Link></h1>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[]}
            style={{ lineHeight: '64px' }}
            onSelect={({ key }) => this.context.router.transitionTo(key)}
            >
            <MenuItem key="/">Home</MenuItem>
            <MenuItem key="/projects">Projects</MenuItem>
          </Menu>
        </Header>
        <Content>
          <Breadcrumb style={{ margin: '12px 0'}}>
            <Breadcrumb.Item key="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item key="/projects">Projects</Breadcrumb.Item>
            <Breadcrumb.Item key={breadcrumb.link}>{breadcrumb.title}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: 'white', padding: 24, minHeight: 280, minHeight: '77vh' }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          © Will Hackett.
        </Footer>
      </Layout>
    );
  }
}
export default DataContainer;
