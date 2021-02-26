import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/counter">Tugas no 1 </Link>
      <Link to="/productitem">Tugas no 2</Link>
    </div>
  );
}

export default Navbar;