import React from 'react'
import { useState } from 'react';

export default function accordion({ items }) {

    const [activeIndex, setActiveIndex] = useState("");

    const toggleItem = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);//close the item if it's already open
        } else {
            setActiveIndex(index);//open the clicked item
        }
    }

    return (
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index} >
                        
                        <button className="accordion-title"
                        onClick={ () => toggleItem(index)} 
                        >{item.title} 
                        <span className="icon"> {activeIndex === index ? '-' : '+'} </span></button>
            
                        {/* //If left side is false → return false  */}
                        {activeIndex === index && (
                            <div className="accordion-content">
                                {item.description}
                            </div>
                        )}

                    </div>
                )
            })}
        </div>
    )
}
