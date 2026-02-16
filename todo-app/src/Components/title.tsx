import "./style.css";
import { Link } from "react-router-dom";

export const Head = () => {
    return (
        <div className="title">
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/progress">Progress</Link>
            </div>

            <h1>ToDo App</h1>
            <p>Your all needs in one place</p>
        </div>
    );
};

export default Head;
