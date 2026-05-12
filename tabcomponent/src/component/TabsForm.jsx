import React, { Component } from 'react'

import Profile from './Profile'
import Education from './Education'
import Job from './Job'
import Family from './Family'
import { useState } from 'react'

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState(0)
  //for form data
  const [data, setData] = useState({
    name: "",
    age: "",
    contact: "",
  })

  const tabs = [
    {
      name: "Profile",
      Component: Profile
    },
    {
      name: "Education",
      Component: Education
    }
    ,
    {
      name: "Job",
      Component: Job

    },
    {
      name: "Family",
      Component: Family
    }
  ]

  const ActiveTabComponent = tabs[activeTab].Component;
  const handlechange = () => {

  }

  return (
    <div className='container'>
      <div className='heading-container'>
        {tabs.map((item, index) => (
          <div
            className='heading'
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className='tab-body'>
        <ActiveTabComponent data={data} setData={setData}/> 
        {/* NEED to pass inputand its changes */}
      </div>
    </div>
  )
}

