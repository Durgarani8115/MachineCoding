import React from 'react'
import {useState} from 'react'

export default function TodoList() {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodoItem = ()=>{
        
        if(input.trim() === ''){
            return;
        }   
        const item ={
            id :todoList.length +1,
            text : input,
            completed : false,
        }
    setTodoList(prev => [...prev, item]);
    setInput('');

    }

    const toggleTodoCompleted = (id) =>{
        setTodoList(todoList.map( t => {
            if(t.id === id){
                return {...t, 
                    completed : !t.completed
                }
            }else{
                return t;
            }
        }))
    }

    const deleteTodo = (id) =>{
    
        setTodoList(todoList.filter(t => t.id !== id));
    }


  return (
    <div>
        <input type='text' placeholder='Enter a todo' value={input}
         onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addTodoItem()}>Add</button>
        <ul>
            {todoList.map(t => <li key={t.id}>
                <input type='checkbox' checked={t.completed} onChange={() => toggleTodoCompleted(t.id)} />
                <span  style={t.completed ? {textDecoration: 'line-through'} : {}}> {t.text} </span>
                <button onClick={() => deleteTodo(t.id)}>Delete</button>
            </li>)}
        </ul>
    </div>
  )
}
