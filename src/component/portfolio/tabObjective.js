/* eslint-disable react/prop-types */
import React from "react";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const TabObjective = (props) => {
  return (
    <ul className="list m-0 p-0 list-unstyled">
      {props.objectives.map((value, index) => {
        return (
          <li key={index}>
            <p className="m-0">
              <span className="pr-2">
                <EmojiObjectsIcon />
              </span>
              {value}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default TabObjective;
