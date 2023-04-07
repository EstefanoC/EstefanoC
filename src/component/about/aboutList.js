import React from "react";
import { Icon1, Icon2, Icon3 } from "../../data/tecnologyItems";
import { useTranslation } from "react-i18next";

let userImage;

const AboutList = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="tabCo p-3">
      <h2 className="mb-3">{t("about.knowledge.p1")}</h2>
      <ul className="icon1 p-0 mb-5">
        {Icon1.map((value, index) => (
          <li className={`logo ${value.title}`} key={index}>
            <a href={value.url} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../media/${value.img.toString()}`)}
                alt={value.title}
                className="img-fluid"
              />
              <strong className="d-block text-center">{value.title}</strong>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">{t("about.knowledge.p2")}</h3>
      <ul className="icon2 p-0 mb-5">
        {Icon2.map((value, index) => (
          <li className="logo" key={index}>
            <a href={value.url} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../media/${value.img.toString()}`)}
                alt={value.title}
                className="img-fluid"
              />
              <strong className="d-block text-center">{value.title}</strong>
            </a>
          </li>
        ))}
      </ul>

      <h3 className="mb-3">{t("about.knowledge.p3")}</h3>
      <ul className="icon3 p-0 mb-5">
        {Icon3.map((value, index) => (
          <li className="logo" key={index}>
            <a href={value.url} target="_blank" rel="noopener noreferrer">
              <img
                src={require(`../../media/${value.img.toString()}`)}
                alt={value.title}
                className="img-fluid"
              />
              <strong className="d-block text-center">{value.title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutList;
