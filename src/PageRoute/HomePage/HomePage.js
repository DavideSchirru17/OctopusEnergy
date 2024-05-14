import './HomePage.scss';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/icon-octopus-logo.png";
import lightning from "../../assets/icons/lightning.svg";
import bills from "../../assets/icons/bills.svg";
import custom from "../../assets/icons/podium_8910200.png";

function HomePage() {
    return (
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

            <div className='container__usage'>
                <div className='container__usage__title'>Live Use</div>
                <div className='container__usage__number'>524w</div>
            </div>
            <Link to="/leaderboard">
            <div className='container__leaderboard'>
                <div className='container__leaderboard__title'>Leaderboard Progression</div>
                <div className='container__leaderboard__number'>↑ Top 15%</div>
            </div>
            </Link>
            <div className='container__leaderboard'>
                <div className='container__leaderboard__title'>Top Rewards</div>
                <div className='container__leaderboard__number'>1. 5% Discount on Next Bill</div>
                <div className='container__leaderboard__number'>2. £20 M&S Gift Voucher</div>
            </div>
            <div className='container__bills'>
                <div className='container__bills__title'>Your Current Bill</div>
                <div className='container__bills__number'>£40.15</div>
                <div className='container__bills__secTitle'>Difference To Last Month</div>
                <div className='container__bills__secNumber'>- £3.45</div>
            </div>
            <div className='container__support'>
                <div className='container__support__title'>Contact Us</div>
                <div className='container__support__options'>
                    <div className='container__support__text'>Live Chat</div>
                    <div className='container__support__text'>Call Us</div>
                    <div className='container__support__text'>Email</div>
                </div>
            </div>

            <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon footer__icon--home footer__icon--usage">
          <img src={logo} className="footer__logo" />
          <p className="footer__text">Home</p>
        </div>
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
        <div className="footer__icon">
          <img src={custom} className="footer__logo" />
          <p className="footer__text">Leaderboard</p>
        </div>
        </Link>
      </div>
    </footer>
        </section>
        
    )
}

export default HomePage;