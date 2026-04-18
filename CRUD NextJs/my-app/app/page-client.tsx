'use client';

import { useState } from "react";
import getServerResponse, { createUser } from "./user.action";

export default function ClientComponent() {
    const[message,setMessage] = useState('');
    const [userdata,setUserdata] = useState([]);

    async function handleclick(){

       const response = await getServerResponse();
       setMessage(response);
    }
    async function handleadd(){

       const response = await createUser("John Doe", "john@example.com");
       setUserdata(response);

    }


    return ( 
        <>
        <button onClick={handleclick} className="bg-blue-500 text-white px-4 py-2 rounded
        
        ">Call server action</button>
        {message && (
            <div>
                {message}
            </div>
        )}
        <button
        className="bg-green-700 m-10 rounded"
        onClick={handleadd}

        > Add user </button>
        </>
     );
}
 
