// Dependencies
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

// Helpers
import TypedReact from "../helpers/typed";

// Icons / Images
import SearchIcon from "@mui/icons-material/Search";
import BgNavCenter from "../../media/bg-browser.jpg";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavRight = ({ stop, start, WithoutStop }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="bg-navCenter">
      <LazyLoad className="autoSize">
        <img
          src={BgNavCenter}
          alt="FrontEnd Developer Senior EstefanoC Estefano Chacon"
          className="bg-fluid"
        />
      </LazyLoad>
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
            stop={stop}
            start={start}
            WithoutStop={WithoutStop}
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
