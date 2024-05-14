import './LeaderBoard.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/icon-octopus-logo.png';
import lightning from "../../assets/icons/lightning.svg";
import bills from "../../assets/icons/bills.svg";
import custom from "../../assets/icons/podium_8910200.png";

function Leaderboard() {
    return (
        <>
        <section className='container'>
            <header className="header">
                <div className="header__container">
            <Link to="/">
            <div className="header__logo-container">
                        <img src={logo} className="header__logo" alt="logo octopus" /><p className='header__user'>John McDonald</p>
            </div>
            </Link>
                </div>
            </header>

        <div className='main'>
            <div className='main__header'>
                <div className='main__header__title'>Leaderboard</div>
                <div className='main__header__rules'>See Rules</div>
            </div>
            <div className='main__announcement'>
                <div className='main__announcement__content'>Winners will be announced on - 31/05/2024</div>
            </div>
            <div className='main__container'>
                <div className='main__container__title'>Your Postcode is in:</div>
                <div className='main__container__position'>Top 15%</div>
            </div>
            <div className='main__container'>
                <div className='main__container__comparison'>Your position last month was:</div>
                <div className='main__container__number'>Top 19%</div>
            </div>

        </div>

            <footer className="footer">
      <div className="footer__container">
        <Link to="/">
        <div className="footer__icon footer__icon--home">
          <img src={logo} className="footer__logo" />
          <p className="footer__text">Home</p>
        </div>
        </Link>
        <div className="footer__icon">
          <img
            src={lightning}
            className="footer__logo footer__logo--lightning"
          />
          <p className="footer__text">Usage</p>
        </div>
        <div className="footer__icon">
          <img src={bills} className="footer__logo footer__logo--lightning" />
          <p className="footer__text">Bills</p>
        </div>
        <Link to="/leaderboard">
        <div className="footer__icon footer__icon--usage">
          <img src={custom} className="footer__logo" />
          <p className="footer__text">Leaderboard</p>
        </div>
        </Link>
      </div>
    </footer>
        </section>
        </>
    )
}

export default Leaderboard; 