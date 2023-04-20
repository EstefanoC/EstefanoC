// Dependencies
import { useTranslation } from "react-i18next";

// Data
import { Icon1, Icon2, Icon3 } from "../../data/technologyItems";

const TabTechnology = ({ items }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <h3 className="mb-2">{t("portfolio.tab-technology-p")}</h3>
      <ul className="list m-0 p-0">
        {items.map((val) => {
          return Icon1.map(({ title, url, img }, index) => {
            if (val === title) {
              return (
                <li className="logo" key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={require(`../../media/${img.toString()}`)}
                      alt={title}
                      className="img-fluid"
                    />
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
                    <img
                      src={require(`../../media/${img.toString()}`)}
                      alt={title}
                      className="img-fluid"
                    />
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
                    <img
                      src={require(`../../media/${img.toString()}`)}
                      alt={title}
                      className="img-fluid"
                    />
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
