import React from 'react'

const MyFooter = () => {
  return (
    <div className="foot" style={{
      width: '100%',
      height: '10vh',
      background: 'linear-gradient(57deg,#00c6a7,#1e8292 )',
      // clipPath: 'polygon(0 100%,100% 90%, 190% 0,0 0)',
      position: 'absolute',
    }} >
      <div style={{
        marginTop: '2vh',
      }}>
        <h3 style={{
          color: 'aliceblue',
          letterSpacing: '2px',
          textAlign: 'center',
        }}>
          Interaction Design + Code by Zeeshan Raza
        </h3>
      </div>
    </div >
  )
}

export default MyFooter;

