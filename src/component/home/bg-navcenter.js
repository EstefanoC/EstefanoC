import React from "react";
import TypedReact from "../helpers/typed";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BgNavCenter from "../../media/bg-browser.jpg";
import { useTranslation } from "react-i18next";

const NavRight = (props) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="bg-navCenter">
      <img src={BgNavCenter} alt="background portafolio" className="bg-fluid" />
      <div className="bg-browser d-flex justify-content-start align-items-start">
        <ArrowBackIcon
          style={{ color: "#babcbe", fontSize: "3vw" }}
          className="d-none d-md-inline-block"
        />
        <ArrowForwardIcon
          style={{ color: "#babcbe", fontSize: "3vw" }}
          className="d-none d-md-inline-block"
        />
        <RefreshIcon
          style={{ color: "#5f6368", fontSize: "3vw" }}
          className="d-none d-md-inline-block"
        />
        <div className="bg-browserSearch d-inline-block">
          <input type="text" name="searchBrowser" disabled />
          <SearchIcon style={{ color: "#babcbe", fontSize: "2.5vw" }} />
          <TypedReact
            speed={80}
            typedString={t("home.bg-portfolio.typed", { returnObjects: true })}
            typeSpeed={90}
            backSpeed={40}
            backDelay={15000}
            cursor="|"
            stop={props.stop}
            start={props.start}
            WithoutStop={props.WithoutStop}
          />
          <div className="bg-browserAccount d-none d-md-inline-block">
            <AccountCircleIcon style={{ color: "#9aa0a6", fontSize: "3vw" }} />
            <span>{t("home.bg-portfolio.invited")}</span>
          </div>
          <MoreVertIcon
            style={{ color: "#5f6368", fontSize: "3vw" }}
            className="d-none d-md-inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default NavRight;
