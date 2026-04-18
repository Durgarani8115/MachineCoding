import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function ProgressBar() {

    const [progress, setProgress] = useState(0);
    useEffect(()=> {
        const interval = setInterval(()=>{
            setProgress((prevProgress) => {
                if(prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
               return prevProgress + 1;
            });
        },100);
        return ()=> clearInterval(interval);
    },[])

    return (

        <div style={{
            width: '100%',
            height: '20px',
            backgroundColor: '#dfd4d4',
            borderRadius: 10,

        }}
        >
            <div style={{
                width: `${progress}%`,

                height: "20px",
                backgroundColor: 'green',
                borderRadius: 10,
                transition: 'width 0.10s',
                // overflow:'hidden'
            }}>

            </div>

               <p>
                 {progress}%
                </p>
            </div>
    );
}

