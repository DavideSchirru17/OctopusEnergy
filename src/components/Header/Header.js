import "./Header.scss";
function Header() {
  return (
    <>
      <header className="header">
        HEADER
        <section className="header__container">
          <img
            src="../../assets/icons/icon-octopus-logo"
            className="header__logo"
            alt="logo octopus"
          />
          <div className="header__live-container"></div>
        </section>
      </header>
    </>
  );
}

export default Header;
