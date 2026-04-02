import React from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'
import { useState } from 'react'

export const TabForm = () => {
    const [data, setData] = useState({
        name: "Anu",
        age: "20",
        email: "anu@gmail.com",
        Interest: ["DSA", "Exercise"],
    })
    const [activeTab, setActiveTab] = useState(0);

    const [errors, setErrors] = useState({})

    const tabs = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const err = {};
                if (!data.name || data.name.length < 2) {
                    err.name = " Name is not valid"
                }
                if (!data.age || data.age < 18) {
                    err.age = " Age is not valid"
                }
                if (!data.email || data.email.length < 2) {
                    err.email = " Email is not valid"
                }

                setErrors(err);
                return err.name || err.age || err.email ? false : true;
            }
        },
        {
            name: "Interest",
            component: Interest,
            validate: () => {
                const err = {};
                if (data.Interest.length === 0) {
                    err.Interest = "select atleast one interest"
                }
                setErrors(err);
                return err.Interest ? false : true;
            }
        },
        {
            name: "Settings",
            component: Settings,
            validate: () => true
        }


    ];
    const ActiveTabComponent = tabs[activeTab].component;

    const handlePrevButton = () => {
        if(tabs[activeTab].validate()){
        setActiveTab((prev) => prev - 1);

        }
    }
    const handleNextButton = () => {
        if(tabs[activeTab].validate()){
        setActiveTab((Next) => Next + 1);

        }
    }
    const handleSubmitButton = () => {
        if(tabs[activeTab].validate()){

         console.log("Final Data:", data);
        }
    }

    return (
        <div className=''>
            <div className='flex m-5 cursor-pointer'>
                {tabs.map((t, index) => (

                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className="align-center border-2 p-2"
                    >{t.name}
                    </div>
                ))}

            </div>
            <div className='border-2 h-90 m-5 p-2 '>
                <ActiveTabComponent data={data} setData={setData} errors={errors} />
            </div>

            <div className='flex flex-row gap-1 justify-center'>

                <div >
                    {activeTab > 0 && <button className="bg-zinc-300 px-4 py-2" onClick={handlePrevButton}>
                        Prev
                    </button>}
                </div>
                <div >
                    {activeTab < tabs.length - 1 && <button className="bg-zinc-300 px-4 py-2" onClick={handleNextButton}>
                        Next
                    </button>}
                </div>
                <div >
                    {activeTab === tabs.length - 1 && <button className="bg-zinc-300 px-4 py-2" onClick={handleSubmitButton}>
                        Submit
                    </button>}
                </div>
            </div>

        </div>

    )
}
