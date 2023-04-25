// Dependencies
import LazyLoad from "react-lazy-load";
import { useTranslation } from "react-i18next";

// Helpers
import UseWidth from "../helpers/UseWidth";

const Experience = () => {
  const [t, i18n] = useTranslation("global");

  const { width } = UseWidth();

  const getSize = (w = 1) => {
    if (w >= 1400) {
      return 824;
    } else if (w >= 1200) {
      return 704;
    } else if (w >= 991) {
      return 584;
    } else if (w >= 768) {
      return 712;
    } else if (w >= 575) {
      return 508;
    } else {
      return w - 56;
    }
  };

  return (
    <ul className="tabExp p-3">
      <p className="mb-3">{t("about.experience.p1")}</p>
      <div className="d-flex flex-wrap experienceUl">
        {t("about.experience.data", { returnObjects: true }).map(
          ({ id, title, url, image, description }) => (
            <li key={id} className="liExp" title={title}>
              <LazyLoad height={getSize(width)} width={getSize(width)}>
                <img
                  src={require(`../../media/${image.toString()}`)}
                  alt="FrontEnd Developer Senior EstefanoC"
                  className="img-fluid"
                />
              </LazyLoad>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="d-inline-flex justify-content-center align-items-center"
              >
                <strong>{title}</strong>
              </a>
              <p className="m-0">{description}</p>
            </li>
          )
        )}
      </div>
      <p className="my-5 text-center text-muted small-text">
        ({t("about.experience.p2")})
      </p>
    </ul>
  );
};

export default Experience;
