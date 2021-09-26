/* eslint-disable react/prop-types */
import React from "react";
import TypedReact from "../helpers/typed";
import { useTranslation } from "react-i18next";

const NavBottom = (props) => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className="bg-navBottom"></div>
      <div className="bg-navBottomPhone">
        <TypedReact
          speed={10}
          typedString={t("home.bg-contact.typed", { returnObjects: true })}
          typeSpeed={90}
          backSpeed={90}
          backDelay={1000}
          cursor=" "
          stop={props.stop}
          start={props.start}
          WithoutStop={props.WithoutStop}
        />
      </div>
    </>
  );
};

export default NavBottom;
