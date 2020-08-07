import React from 'react'
import TaskListContextProvider from '../context/TaskListContext'
import '../App.css'
import TaskList from './TaskList'
import InputField from './InputField'
import Header from './Header'



const App = () => {

    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="main">
                        <Header />
                        <InputField />
                        <TaskList />
                       


                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    )

}

export default App
