import React from 'react'
import '../css/components.css'
export  function getnewContent(){
    return <h1 id='new_content_div'>BYJU'S-The Learning App</h1>
  }
  function getContent(){
    return <div  ><img src='https://tse1.mm.bing.net/th?id=OIP.XqcSpDZywTn38RWQeEiaYQHaHa&pid=Api&P=0&w=162&h=162' width={180} height={125}/></div>
  }
 
 export default function header(){
    return <div id='header_div' >{getContent()}{getnewContent()}</div>
  }