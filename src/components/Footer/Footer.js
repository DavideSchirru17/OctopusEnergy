import "./Footer.scss";
import logo from "../../assets/icons/icon-octopus-logo.png";
import lightning from "../../assets/icons/lightning.svg";
import bills from "../../assets/icons/bills.svg";
import custom from "../../assets/icons/podium_8910200.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__icon footer__icon--home">
          <img src={logo} className="footer__logo" />
          <p className="footer__text">Home</p>
        </div>
        <div className="footer__icon footer__icon--usage">
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
        <div className="footer__icon">
          <img src={custom} className="footer__logo" />
          <p className="footer__text">Leaderboard</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
