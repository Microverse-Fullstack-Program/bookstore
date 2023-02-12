import { Outlet, NavLink } from 'react-router-dom';
import { BsPersonFill } from 'react-icons/bs';

const Layout = () => {
  const navLinkStyle = ({ isActive }) => {
    const activeLinkStyle = {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      color: isActive ? '#a8a8a8' : '#d4d4d4',
    };
    return activeLinkStyle;
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="nav-wrapper">
          <h2>BookStore CMS</h2>
          <nav className="nav-bar">
            <NavLink to="/" class="navLink" style={navLinkStyle}>
              BOOKS
            </NavLink>
            <NavLink to="/categories" style={navLinkStyle}>
              CATEGORIES
            </NavLink>
          </nav>
        </div>
        <BsPersonFill className="personIcon" />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
