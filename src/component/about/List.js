// Dependencies
import { useTranslation } from "react-i18next";

// Data
import { Icon1, Icon2, Icon3 } from "../../data/technologyItems";

const List = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="tabCo p-3">
      <h2 className="mb-3">{t("about.knowledge.p1")}</h2>
      <ul className="icon1 p-0 mb-5">
        {Icon1.map(({ title, url, img }, index) => (
          <li className={`logo ${title}`} key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../media/${img.toString()}`)}
                alt={title}
                className="img-fluid"
              />
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
              <img
                src={require(`../../media/${img.toString()}`)}
                alt={title}
                className="img-fluid"
              />
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
              <img
                src={require(`../../media/${img.toString()}`)}
                alt={title}
                className="img-fluid"
              />
              <strong className="d-block text-center">{title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
