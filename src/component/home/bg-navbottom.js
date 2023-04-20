// Dependencies
import { useTranslation } from "react-i18next";

// Helpers
import TypedReact from "../helpers/typed";

const NavBottom = ({ stop, start, WithoutStop }) => {
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
          stop={stop}
          start={start}
          WithoutStop={WithoutStop}
        />
      </div>
    </>
  );
};

export default NavBottom;
