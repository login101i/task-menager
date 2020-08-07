import React, { useState, createContext, useEffect } from 'react';
// import uuid from 'uuid'
// import {v4 as uuidv4} from 'uuid'
// const uuid = require('uuid');
// import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-uuid';


export const TaskListContext = createContext()

const TaskListContextProvider = props => {

const currentItems=  JSON.parse(localStorage.getItem("tasks"))||[]
// codeGame

    const [tasks, setTasks] = useState( currentItems
    //     [
    //     { title: "zrób zakupy", id: 1 },
    //     { title: "poleć Do Kairu", id: 2 },
    //     { title: "kup warzywa", id: 3 },
    // ]
    );

    const [editItem, setEditItem]=useState(null)

    useEffect(()=>{
        localStorage.setItem("items", JSON.stringify(tasks))
    },[tasks])

    // Add tasks
    const addTask = title => {
        setTasks([...tasks, { title, id: uuid() }])
    }
    // remove task
    const removeTask = id =>{
        setTasks(tasks.filter(task=>(task.id !== id)))
    }
    // clear list
    const clearList =()=>{
        setTasks("")
    }
    //find item
    const findItem=id=>{
        const item=tasks.find(task=>task.id===id)
        console.log(item)
        setEditItem(item)
    }
    // edit task
    const editTask=(title,id)=>{
        const newTasks = tasks(task=>( task.id===id ? {title, id}: task))

        setTasks(newTasks)
        setEditItem(null)

    }


    return (
        <TaskListContext.Provider value={{ 
            tasks ,
            addTask,
            removeTask,
            clearList,
            findItem,
            editTask,
            editItem
            }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider