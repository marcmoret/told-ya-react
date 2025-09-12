export default function NavbarComponent() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          ToldYa!
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/argument">Arguments</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        {/* empty */}
      </div>
    </nav>
  );
}
