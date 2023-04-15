// Dependencies
import { useTranslation } from "react-i18next";

const Experience = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <ul className="tabExp p-3">
      <p className="mb-3">{t("about.experience.p1")}</p>
      <div className="d-flex flex-wrap experienceUl">
        {t("about.experience.data", { returnObjects: true }).map(
          ({ id, title, url, image, description }) => (
            <li key={id} className="liExp" title={title}>
              <img
                src={require(`../../media/${image.toString()}`)}
                className="img-fluid"
              />
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
