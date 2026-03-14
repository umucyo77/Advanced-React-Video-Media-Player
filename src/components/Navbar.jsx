import Search from "./Search";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>YouTubeClone</h2>
      </Link>
      <Search />
    </div>
  );
}

export default Navbar;