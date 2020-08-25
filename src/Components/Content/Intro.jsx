import React from 'react'
import imag from '../../assets/home.png'
import { Row, Col, Typography } from 'antd';
import useWebAnimations from "@wellyshen/use-web-animations";
import {
  FacebookFilled, MailFilled, GithubFilled, TwitterCircleFilled
} from '@ant-design/icons';
import './intro.css';

const Intro = () => {
  const { Title } = Typography;

  const { ref } = useWebAnimations({
    keyframes: {
      transform: "translateY(35px)",
    },
    timing: {
      duration: 1600,
      iterations: Infinity,
      easing: "ease-in-out",
      direction: "alternate",
    },
  });

  const iconAni = useWebAnimations({
    keyframes: {
      transform: 'translateX(15px)'
    },
    timing: {
      duration: 1600,
      iterations: Infinity,
      direction: 'alternate',
    }
  });

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(57deg, #00c6a1, #1e8294)',
      clipPath: 'polygon(0 0, 190% 0, 100% 90%, 0 100%)',
      color: '#ffffff',
    }}>
      <Row>
        <Col xs={18} sm={12}>
          <Title style={{
            textAlign: 'center',
            paddingTop: '15%',
            color: 'white',
          }} level={1}>Zeeshan Raza</Title>
          <Title style={{
            textAlign: 'center',
            marginTop: '5%',
            color: 'white',
          }} level={1}>
            MERN Stack Developer
          </Title>
          <Title style={{
            textAlign: 'center',
            marginTop: '5%',
            color: 'white',
          }} level={4}>
            Strong background in project management and customer
            relations. Like a successful Person, I always believe in learning and remain up to date.
        </Title>
          <div ref={iconAni.ref} style={{
            textAlign: 'center',
            marginTop: '10%',
          }}>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/zeeshan-raza/"
              target="_blank"
            >
              <FacebookFilled style={{ fontSize: '35px', marginRight: '15px', color: '#ffffff' }} />
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:zeeshanraza252627@gmail.com"
              target="_blank"
            >
              <MailFilled style={{ fontSize: '35px', marginRight: '15px', color: '#ffffff' }} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/ZeeshanRaza25"
              target="_blank"
            >
              <GithubFilled style={{ fontSize: '35px', marginRight: '15px', color: '#ffffff' }} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/ZEESHAN64641810"
              target="_blank"
            >
              <TwitterCircleFilled style={{ fontSize: '35px', marginRight: '15px', color: '#ffffff' }} />
            </a>
          </div>
        </Col>
        <Col xs={20} sm={12} style={{
          textAlign: 'center',
        }}>
          <img width="70%" ref={ref} src={imag} alt="imag" />
        </Col>
      </Row>
    </div>
  )
}
export default Intro;

