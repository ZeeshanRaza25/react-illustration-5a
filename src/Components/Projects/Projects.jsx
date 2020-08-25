import React from 'react';
import pic from '../../assets/pic.gif';
import { Row, Col, Typography } from 'antd';

const Projects = () => {
  const { Title, Paragraph } = Typography;
  return (
    <div style={{
      height: '100vh',
    }}>
      <Row style={{
        marginTop: '15vh',
        textAlign: 'center',
      }}>
        <Col xs={20} sm={13}>
          <img width="60%" src={pic} alt="pic" />
        </Col>
        <Col xs={24} sm={11} style={{
          // marginTop: '60px',
          textAlign: 'left',
          // marginTop: '50px',
          // paddingTop: '20vh',
        }}>
          <Title level={1}
            style={{
              width: '150px',
              height: '50px',
              borderColor: '#5C1094',
              padding: '10px',
              // display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'linear-gradient(57deg,#00c6a7,#1e8292)',
              // fontWeight: 'normal',
              fontSize: '22px',
              color: 'white',
              textAlign: 'center',
              paddingLeft: '15px',
            }}>
            About
          </Title>
          <Paragraph style={{
            fontSize: '21px',
            fontWeight: '400',
            // padding: '40px',
            paddingTop: '10px',
            paddingLeft: '15px',
            color: 'black',
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
          }} >My copywriting and UX writing draws on abilities developed in the psychological sciences.
          </Paragraph>
          <Paragraph style={{
            fontSize: '21px',
            fontWeight: '400',
            padding: '40px',
            paddingTop: '0px',
            paddingBottom: '190px',
            paddingLeft: '15px',
            color: 'black',
            display: 'block',
            marginBlockStart: '1em',
            marginBlockEnd: '1em',
            marginInlineStart: '0px',
            marginInlineEnd: '0px',
          }} >
            Expertise in visual perception, behavioral motivation, and decision-making allows me to
            engineer words that convert customers and guide users.
          </Paragraph>
        </Col>
      </Row>
    </div>
  )
}

export default Projects;