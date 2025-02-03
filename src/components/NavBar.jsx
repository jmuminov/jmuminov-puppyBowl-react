import { Link } from "react-router-dom";

export default function NavBar() {
  console.log("NavBar rendered");
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/new-player" className="nav-link">Add New Player</Link>
    </nav>
  );
}
