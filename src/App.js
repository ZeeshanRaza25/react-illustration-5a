import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MyHeader from './Components/Header/Header';
import { Layout, Row, Col } from 'antd';
import Intro from './Components/Content/Intro';
import MyFooter from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

function App() {
  const { Content } = Layout;
  return (
    <div>
      <Layout>
        <MyHeader />
        <Content>
          <Row>
            <Col xs={24} sm={24}>
              <Intro />
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24}>
              <Projects />
            </Col>
          </Row>
        </Content>
        <Row>
          <Col xs={24} sm={24}>
            <MyFooter />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}

export default App;
