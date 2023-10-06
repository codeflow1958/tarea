

export default function Info(props) {
  return (
    <div style={{

      textAlign: 'justify',
      width: '90%',

    }}>
      <h3>{props.tittle} </h3>
      <h2>{props.sub}</h2>
      <br />
      <div>
        <p>{props.des}</p>
      </div>
      <br />



    </div>
  )
}
