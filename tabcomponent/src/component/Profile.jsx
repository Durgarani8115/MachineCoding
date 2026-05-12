import React from 'react'
import { useState } from 'react'

export default function Profile({data,setData}) {
 const {name,age,contact} = data;

 const handleChange =(e,item) =>{
  setData((prevStae) => ({
    //pasing object
    ...prevStae,
    [item] : e.target.value //dynamic handle each item
  }))
  
 }


  return (
    <div>
      <div className='form-container'>
        <div>
          <label>Name </label>
          <input type="text" value={name} onChange={(e) => handleChange(e,"name")}/>
        </div>
        <div>
          <label>Age </label>
          <input type="number" value={age} onChange={(e) => handleChange(e,"age")} />
        </div>
        <div>
          <label>Contact  </label>
          <input type="text" value={contact} onChange={(e) => handleChange(e,"contact")} />
        </div>
      </div>
    </div>
  )
}
