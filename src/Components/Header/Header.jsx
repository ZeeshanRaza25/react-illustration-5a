import React from 'react'
import { PageHeader, Button } from 'antd';
import './header.css';

const MyHeader = () => {

  return (
    <div className="header-container">
          <PageHeader
            style={{
              background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
              padding: '15px',
              color: 'white',
              fontWeight: 'bolder',
              textAlign: 'center',
            }}
            ghost={true}
            title="Portfolio"
            // subTitle="This is a subtitle"
            extra={[
              <Button style={{
                borderStyle: 'none',
                background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
                color: 'white',
                fontWeight: 'bold',
                // textDecorationStyle: 'inherit',
              }} key="1">Home</Button>,
              <Button style={{
                borderStyle: 'none',
                background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
                color: 'white',
                fontWeight: 'bold'
              }} key="2">Services</Button>,
              <Button style={{
                borderStyle: 'none',
                background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
                color: 'white',
                fontWeight: 'bold'
              }} key="3">Contact us</Button>,
              <Button style={{
                borderStyle: 'none',
                background: 'linear-gradient(57deg,#00c6a7,#1e8292)',
                color: 'white',
                fontWeight: 'bold'
              }} key="4">About us</Button>,
            ]}
          >
          </PageHeader>
    </div>
  )
}

export default MyHeader;

