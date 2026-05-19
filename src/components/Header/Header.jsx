import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav-menu">
          <div id="logo">
            <span id="logo-image">p</span>

            <Link to="/" className="">
              Photography
            </Link>
          </div>

          <Link to="/pricing">Pricing</Link>
          <Link to="/galleries">Galleries</Link>
          <Link to="/crm">CRM</Link>
        </nav>

        <div className="authentication">
          <Link to="/crm">login</Link>

          {/* <ButtonMd
            label="sign up"
            type="button"
            customClass="bg-black text-white"
            hoverClass="bg-yellow"
          /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
