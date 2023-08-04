import "./main-header.scss";

export default function MainHeader() {
  return (
    <div className="main-header__wrapper">
      <div className="main-header">
        <div className="logo__wrapper">
          <h3 className="logo">
            Bid<span>4</span>It
          </h3>
        </div>
        <div className="main-menu__wrapper">
          <div className="main-menu">
            <button className="main-menu__button">home</button>
            <button className="main-menu__button">auctions</button>
            <button className="main-menu__button">events</button>
            <button className="main-menu__button">create auctions</button>
            <button className="main-menu__button">contact</button>
          </div>
        </div>
        <div className="user-menu__wrapper">
          <div className="user-menu">
            <button className="user-menu__button">sign up</button>
            <button className="user-menu__button">log in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
