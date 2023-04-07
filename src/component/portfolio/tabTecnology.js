import React from "react";
import { Icon1, Icon2, Icon3 } from "../../data/tecnologyItems";
import { useTranslation } from "react-i18next";

const TabTechnology = (props) => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <h3 className="mb-2">{t("portfolio.tab-technology-p")}</h3>
      <ul className="list m-0 p-0">
        {props.items.map((val) => {
          return Icon1.map((value, index) => {
            if (val === value.title) {
              return (
                <li className="logo" key={index}>
                  <a href={value.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={require(`../../media/${value.img.toString()}`)}
                      alt={value.title}
                      className="img-fluid"
                    />
                    <strong className="d-block text-center t'w">
                      {value.title}
                    </strong>
                  </a>
                </li>
              );
            }
            return null;
          });
        })}
        {props.items.map((val) => {
          return Icon2.map((value, index) => {
            if (val === value.title) {
              return (
                <li className="logo" key={index}>
                  <a href={value.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={require(`../../media/${value.img.toString()}`)}
                      alt={value.title}
                      className="img-fluid"
                    />
                    <strong className="d-block text-center t'w">
                      {value.title}
                    </strong>
                  </a>
                </li>
              );
            }
            return null;
          });
        })}
        {props.items.map((val) => {
          return Icon3.map((value, index) => {
            if (val === value.title) {
              return (
                <li className="logo" key={index}>
                  <a href={value.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={require(`../../media/${value.img.toString()}`)}
                      alt={value.title}
                      className="img-fluid"
                    />
                    <strong className="d-block text-center t'w">
                      {value.title}
                    </strong>
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
