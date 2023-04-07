import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useTranslation } from "react-i18next";

const AboutKnowledge = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <ul className="tabCer">
      {t("about.certificate.data", { returnObjects: true }).map((value) => (
        <li key={value.id} className="liCer" title={value.name}>
          <a
            href={process.env.PUBLIC_URL + `/pdf${value.url}`}
            target="_blank"
            rel="noreferrer"
            download={`${value.name} Estefano Chacon ${t(
              "about.certificate.title"
            )}`}
          >
            <CloudDownloadIcon
              style={{ fontSize: "3rem", display: "block", margin: "0 auto" }}
            />
            <strong>{value.name}</strong>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default AboutKnowledge;
