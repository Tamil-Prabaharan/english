import React from 'react'
import { useState } from 'react'

const App = () => {
  const [gender1,setGender]=useState("")

  const dis=(e)=>{
    if(e.target.value==="male"){
      e.target.checked=true
      setGender("male")
    }

    if(e.target.value==="Female"){
      e.target.checked=true
      setGender("Female")
    }

    if(e.target.value==="others"){
      e.target.checked=true
      setGender("others")
    }

  }

  return (
    <div>
      <>
      <input type="radio" onChange={(e)=>dis(e)} name="gen" value="male"/>male<br></br>
      <input type="radio" onChange={(e)=>dis(e)} name="gen" value="Female"/>Female<br></br>
      <input type="radio" onChange={(e)=>dis(e)} name="gen" value="others"/>others<br></br>
      selected gender :{gender1}
      </>
    </div>
  )
}

export default App

