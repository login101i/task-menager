import React, { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {
    const { tasks } = useContext(TaskListContext)
    return (
        <div>
            {tasks.length > 0 ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id} />
                    })}
                </ul>
            )
                :
                (<div className="no-tasks">
                    "Brak zadań do wykonania"
                </div>)}

        </div>
    )
}

export default TaskList
