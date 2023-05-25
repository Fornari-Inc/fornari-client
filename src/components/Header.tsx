import { Link as ScrollLink } from "react-scroll";

function Header() {
  return (
    <header className="header">
      <h2 className="header-title"></h2>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <ScrollLink activeClass="active" to="title" spy={true} smooth={true} offset={-70} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              About Me
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>
              Experience
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
