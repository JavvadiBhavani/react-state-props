import React from 'react'
import '../css/components.css'
export default function Reusable(props){
    return <div id="reusable_div" >
      <h2  id='reusable_h2' >{props.heading}</h2>
      <p id='reusable_p' > {props.data}</p>
      </div>
  }