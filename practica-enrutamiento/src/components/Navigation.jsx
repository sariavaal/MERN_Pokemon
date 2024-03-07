import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/number">Number</Link>
                </li>
                <li>
                    <Link to="/word">Word</Link>
                </li>
                <li>
                    <Link to="/hello/Hello/blue/red">Hello</Link>
                </li>
            </ul>
        </nav>
    );
}