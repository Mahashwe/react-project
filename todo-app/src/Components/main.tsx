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

    return (
        <div>
            <div className="card">
                <input
                    type="text"
                    placeholder="Enter Task Title"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>

            {tasks.map((task) => (
                <div className="card" key={task.id}>
                    <h4>{task.title}</h4>
                    <button onClick={() => deleteTask(task.id)}>Delete Task</button>
                </div>
            ))}
        </div>
    )
}

export default Main
