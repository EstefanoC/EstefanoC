// Dependencies
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

// Helpers
import UseWidth from "../helpers/UseWidth";

// Data
import { Icon1, Icon2, Icon3 } from "../../data/technologyItems";

const TabTechnology = ({ items }) => {
  const [t, i18n] = useTranslation("global");

  const { width } = UseWidth();

  const getSize = (w = 1) => {
    if (w >= 1200) {
      return 60;
    } else if (w >= 768) {
      return 115;
    } else if (w >= 575) {
      return 80;
    } else {
      return 60;
    }
  };

  return (
    <>
      <h3 className="mb-2 text-start">{t("portfolio.tab-technology-p")}</h3>
      <ul className="list m-0 p-0 d-flex flex-wrap justify-content-start align-items-start">
        {items.map((val) => {
          return Icon1.map(({ title, url, img }, index) => {
            if (val === title) {
              return (
                <li className="logo" key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <LazyLoad
                      width={getSize(width)}
                      height={getSize(width)}
                      className="small"
                    >
                      <img
                        src={require(`../../media/${img.toString()}`)}
                        alt={title}
                        className="img-fluid"
                      />
                    </LazyLoad>
                    <strong className="d-block text-center t'w">{title}</strong>
                  </a>
                </li>
              );
            }
            return null;
          });
        })}
        {items.map((val) => {
          return Icon2.map(({ title, url, img }, index) => {
            if (val === title) {
              return (
                <li className="logo" key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <LazyLoad
                      width={getSize(width)}
                      height={getSize(width)}
                      className="small"
                    >
                      <img
                        src={require(`../../media/${img.toString()}`)}
                        alt={title}
                        className="img-fluid"
                      />
                    </LazyLoad>
                    <strong className="d-block text-center t'w">{title}</strong>
                  </a>
                </li>
              );
            }
            return null;
          });
        })}
        {items.map((val) => {
          return Icon3.map(({ title, url, img }, index) => {
            if (val === title) {
              return (
                <li className="logo" key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <LazyLoad
                      width={getSize(width)}
                      height={getSize(width)}
                      className="small"
                    >
                      <img
                        src={require(`../../media/${img.toString()}`)}
                        alt={title}
                        className="img-fluid"
                      />
                    </LazyLoad>
                    <strong className="d-block text-center t'w">{title}</strong>
                  </a>
                </li>
              );
            }
            return null;
          });
        })}
      </ul>
    </>
  );
};

export default TabTechnology;
