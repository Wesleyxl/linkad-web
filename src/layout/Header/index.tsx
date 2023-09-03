import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo/logo.png";
import { logout } from "../../services/auth";
import { Container } from "./styles";

const Header: React.FC = () => {
  async function handleLogout(): Promise<void> {
    await logout();
  }

  return (
    <Container>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Linkad" title="Linkad" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/group">Group</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/profiles">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="option">
          <button type="button" onClick={handleLogout}>
            logout
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
