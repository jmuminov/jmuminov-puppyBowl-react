import { Link } from "react-router-dom";

export default function NavBar() {
    console.log("NavBar rendered");
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
        </div>
    );
}