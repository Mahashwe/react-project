import React, { useEffect } from "react";
import "./style.css"
import download from "../assets/download.jpg"

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type DashboardProps = {
    tasks: Task[];
};

const allDone = (tasks: Task[]) => {
    const completed = tasks.filter(t => t.completed).length;

    if (tasks.length > 0 && tasks.length === completed) {
        alert("All tasks completed! Great job!");
    }
};

const Dashboard = ({ tasks }: DashboardProps) => {
    useEffect(() => {
        allDone(tasks);
    }, [tasks]);
    return (
        <div className="new">
            <h2>Your Progress</h2>
            <div>
                <h3>Total Tasks: {tasks.length}</h3>
                <h3>Completed: {tasks.filter(t => t.completed).length}</h3>
                <h3>Pending: {tasks.filter(t => !t.completed).length}</h3>
            </div>
            <img src={download} alt="Progress" className="progressImg" />
        </div>
    );
};

export default Dashboard;