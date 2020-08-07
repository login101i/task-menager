import React, { useContext, useState, useEffect} from 'react'
import { TaskListContext } from '../context/TaskListContext'


const InputField = () => {

    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)
 const [title, setTitle] = useState()

    const handleChange = e => {
        setTitle(e.target.value)
        console.log(title)
    }
    const handleSubmit = e => {
        e.preventDefault()
       if(!editItem){
           addTask(title)
           setTitle("")
       }else{
           editTask(title, editItem.id)
       }
      

    }

    useEffect(()=>{
        if(editItem){
            setTitle(editItem.title)
        }else{
            setTitle("")
        }
    },[editItem])

    return (
        <form
            onSubmit={handleSubmit}
            className="form">
            <input
                onChange={handleChange}
                type="text"
                value={title}
                className="task-input"
                placeholder="Wpisz zadanie tutaj"
                required
            />
            <div className="buttons">
                <button
                    onClick={addTask}
                    type="submit"
                    className="btn add-task-btn"
                >
                    {editItem ? "Edytuj" : "Dodaj"}
              </button>
                <button
                    type="submit"
                    className="btn clear-btn"
                    onClick={clearList}
                >
                  Wyczyść
              </button>
            </div>
        </form>
    )
}

export default InputField
