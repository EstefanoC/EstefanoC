// Dependencies
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

// Helpers
import UseWidth from "../helpers/UseWidth";

// Data
import { Icon1, Icon2, Icon3 } from "../../data/technologyItems";

const List = () => {
  const [t, i18n] = useTranslation("global");

  const { width } = UseWidth();

  const getSize = (w = 1) => {
    if (w >= 1400) {
      return 75;
    } else if (w >= 768) {
      return 70;
    } else if (w >= 340) {
      return 70;
    } else {
      return 100;
    }
  };

  return (
    <div className="tabCo p-3">
      <h2 className="mb-3">{t("about.knowledge.p1")}</h2>
      <ul className="icon1 p-0 mb-5">
        {Icon1.map(({ title, url, img }, index) => (
          <li className={`logo ${title}`} key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <LazyLoad
                height={getSize(width)}
                width={getSize(width)}
                className="small"
              >
                <img
                  src={require(`../../media/${img.toString()}`)}
                  alt={title}
                  className="img-fluid"
                />
              </LazyLoad>
              <strong className="d-block text-center">{title}</strong>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">{t("about.knowledge.p2")}</h3>
      <ul className="icon2 p-0 mb-5">
        {Icon2.map(({ title, url, img }, index) => (
          <li className="logo" key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <LazyLoad height={70} width={70}>
                <img
                  src={require(`../../media/${img.toString()}`)}
                  alt={title}
                  className="img-fluid"
                />
              </LazyLoad>
              <strong className="d-block text-center">{title}</strong>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">{t("about.knowledge.p3")}</h3>
      <ul className="icon3 p-0 mb-5">
        {Icon3.map(({ title, url, img }, index) => (
          <li className="logo" key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <LazyLoad height={70} width={70}>
                <img
                  src={require(`../../media/${img.toString()}`)}
                  alt={title}
                  className="img-fluid"
                />
              </LazyLoad>
              <strong className="d-block text-center">{title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
