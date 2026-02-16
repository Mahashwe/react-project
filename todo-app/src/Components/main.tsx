import { useState } from "react"
import "./style.css"

type Task = {
    id: number
    title: string
    completed: boolean
}

function Main() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    const addTask = () => {
        if (inputValue.trim() === "") return

        const newTask: Task = {
            id: Date.now(),
            title: inputValue,
            completed: false
        }

        setTasks([...tasks, newTask])
        setInputValue("")
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const doneTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ?
                { ...task, completed: !task.completed } :
                task
        ))
    }

    return (
        <div>
            <div className="card">
                <input
                    type="text"
                    placeholder="Enter Task Title"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="addBtn" onClick={addTask}>Add</button>
            </div>

            <div className="taskList">
                {tasks.map((task) => (
                    <div className="card" key={task.id}>
                        <h4 className={task.completed ? "completed" : ""}>{task.title}</h4>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => doneTask(task.id)}
                        />
                        <button className="deleteBtn" onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main
