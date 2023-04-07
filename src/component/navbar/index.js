import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useTranslation } from "react-i18next";
import Logo from "../../media/LogoEc.svg";
import "./index.css";

let userImage;

const NavbarTop = ({ setDarkMode, darkMode }) => {
  const [path, setPath] = useState();
  const [click, setClick] = useState(false);
  const [t, i18n] = useTranslation("global");

  const usePageViews = () => {
    let location = useLocation();
    useEffect(() => {
      setPath(location.pathname);
    }, [location]);
  };

  const handleClick = () => {
    setClick(!click);
  };

  usePageViews();

  return (
    <nav className="navbar">
      <div className="navbarBrand">
        <Link to="/">
          <img src={Logo} alt="Logo" className="img-logo" />
        </Link>
      </div>
      <ul className={click ? "nav-menu active p-0" : "nav-menu p-0"}>
        {t("navbar.nav-menu-li", { returnObjects: true }).map((item, index) => (
          <li key={index}>
            <Link
              className={`${path === item.url ? "active" : ""} ${item.cName}`}
              to={item.url}
              onClick={handleClick}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={`switch-container ${darkMode ? "active" : ""}`}>
        <button className="switch" id="switch" onClick={() => setDarkMode()}>
          <span>
            <WbSunnyIcon
              style={{ color: "var(--comple1)", fontSize: "auto" }}
            />
          </span>
          <span>
            <Brightness2Icon
              style={{ color: "var(--comple2)", fontSize: "auto" }}
            />
          </span>
        </button>
      </div>
      <div className="country-select">
        <ul className="m-0 p-0 list-unstyled d-flex justify-content-center">
          {t("navbar.language-map", { returnObjects: true }).map(
            ({ code, title }) => (
              <li
                key={code}
                className={`${
                  code === i18n.language ? "active" : "deactivate"
                }`}
                onClick={() => i18n.changeLanguage(code)}
              >
                <img
                  src={require(`../../media/lang_${code.toString()}.png`)}
                  alt={code}
                  width="31"
                  height="21"
                />
                <span className={`title-code ${code}`}>{title}</span>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <MenuIcon
          style={{ color: "#1e1e1e", fontSize: "5rem" }}
          className={click ? "move" : "move-out"}
        ></MenuIcon>
        <CloseIcon
          style={{ color: "#1e1e1e", fontSize: "5rem" }}
          className={click ? "move-out" : "move"}
        ></CloseIcon>
      </div>
    </nav>
  );
};

export default NavbarTop;
