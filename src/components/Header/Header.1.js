import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <section className="header__container">
          <div className="header__logo-container">
            <img src="../" className="header__logo" alt="logo octopus" />
          </div>
          <div className="header__live-container">
            <button className="header__button header__button--active">
              Live
            </button>
            <div className="header__frame-time">
              <div className="header__time-button">Day</div>
              <div className="header__time-button">Week</div>
              <div className="header__time-button">Month</div>
              <div className="header__time-button">Year</div>
              <img />
            </div>
          </div>

          <div className="header__dropdown-container">
            <button className="header__dropdown-arrow" onClick={toogleDropdown}>
              LAST 30 MINUTES
            </button>
            {isOpen && (
              <div className="header__dropdown-content">
                <a href="#"> Link 1</a>
                <a href="#"> Link 2</a>
                <a href="#"> Link 3</a>
              </div>
            )}
          </div>
        </section>
      </header>
    </>
  );
}
