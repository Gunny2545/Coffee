import React from 'react'

const NameCard = (props) => {
    return (
    <div style={divStyle}>

        <img src={props.picture} width="190" height="170" alt="" />

        <p style={textStyle}>
            Menu : {props.name}
        </p>
        <p style={textStyle}>
            Price  {props.price}
        </p>
        <p style={textStyle}>
            Hot : {props.type}
        </p>
        <p style={textStyle}>
            Cold : {props.type2}
        </p>
        <p style={textStyle}>
            Frappe : {props.type3}
        </p>

    </div>
    )
  }
  const divStyle={
      border: '1px solid black',
      borderRadius: 5,
      padding: 20,
      marginLeft: '20%',
      marginRight: '20%',
      fontWeight: 'bold',
      fontFamily: 'courier',
      marginBottom: 15,
  }
  const textStyle={
    marginBottom: 10,  
  }
  export default NameCard