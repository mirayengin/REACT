import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;

//! a tag ile yapılan yönlendirmelerde sayfa sürekli render olur fakat react-router-dom da bunu engellemek için link veya Navlink tag i kullanılır.
//? Navlink e extra olarak style yapabiliriz.
