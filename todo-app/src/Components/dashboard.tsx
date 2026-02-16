import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type DashboardProps = {
    tasks: Task[];
};

// Small helper: window size (Confetti needs width/height)
function useWindowSize() {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return size;
}

const Dashboard = ({ tasks }: DashboardProps) => {
    const { width, height } = useWindowSize();

    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const allCompleted = total > 0 && completed === total;

    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        if (allCompleted) {
            setCelebrate(true);

            const timer = setTimeout(() => setCelebrate(false), 5000);
            return () => clearTimeout(timer);
        } else {
            setCelebrate(false);
        }
    }, [allCompleted]);

    return (
        <div className="new">
            {celebrate && <Confetti width={width} height={height} />}

            <h2>Your Progress</h2>
            <div>
                <h3>Total Tasks: {total}</h3>
                <h3>Completed: {completed}</h3>
                <h3>Pending: {total - completed}</h3>
            </div>
        </div>
    );
};

export default Dashboard;
