// icons
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const TabObjective = ({ objectives }) => (
  <ul className="list m-0 p-0 list-unstyled d-flex flex-column justify-content-start align-items-start">
    {objectives.map((value, index) => (
      <li key={index} className="text-start">
        <p className="m-0">
          <span className="pr-2">
            <EmojiObjectsIcon />
          </span>
          {value}
        </p>
      </li>
    ))}
  </ul>
);

export default TabObjective;
