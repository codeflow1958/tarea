import React from 'react'

export default function tarjeta(props) {
  return (
      <div style={{
          display: 'flex',
          textAlign: 'justify',
          gap:'4rem'
      }}>
        <div>
            <p>{props.fecha} </p>
        </div>

        <div className=''>
            <h4 >{props.tittle} </h4>
            <p>{props.description} </p>
            <br />
        </div>

    </div>
  )
}
