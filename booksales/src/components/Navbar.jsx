import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
    <div className="container">
      <Link className="navbar-brand fw-bold text-warning" to="/">📚 BookSale.id</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/team">Our Team</Link></li>
          <li className="nav-item"><Link className="nav-link btn btn-outline-warning btn-sm ms-lg-2 text-white" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;