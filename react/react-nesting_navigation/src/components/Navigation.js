function Nav({ children }) {
  return (
    <>
      <nav>
        <a className="navigation__link" href="#home">
          Home
        </a>
        <a className="navigation__link" href="#about">
          About
        </a>
        <a className="navigation__link" href="#impressum">
          Impressum
        </a>
        {children}
      </nav>
    </>
  );
}

export default Nav;
