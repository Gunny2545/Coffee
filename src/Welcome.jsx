import React from 'react'

const Welcome = (props) => {
  return (
    <h2 style={textStyle}>Welcome, {props.name}</h2>
  )
}
const textStyle={
  color:"red",
  fontSize:20
}
export default Welcome