import React from 'react'

export default function Settings({data, setData}) {
  const { theme} = data;

  const handleChangeData = (e)=>{
    setData((prevState) =>({
      ...prevState,theme : e.target.name
    }))
  }
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Settings</h1>
      <div>
        <label >
          <input type="radio"
            name="dark"
            checked={theme === 'dark'}
            onChange={handleChangeData}
          /> Dark
        </label>
      </div>

      <div>
      <label >
        <input type='radio'
         name='light'
        checked={theme === 'light'}
        onChange={handleChangeData}
        /> Light
      </label>

      </div>
    </div>
  )
}
