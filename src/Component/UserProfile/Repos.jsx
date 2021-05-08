import React from "react";
import { useSelector } from "react-redux";
import slyles from "./UserProfile.module.css";
import { userNameSelector } from "../../redux/users-selector";

const Repos = (props) => {
  let userName = useSelector(userNameSelector);
  return (
    <div className={slyles.repos}>
      <a target="_blank" rel="noreferrer"
         href={`https://github.com/${userName}/${props.rep.name}`}
      >
        <h3 className={slyles.name}>{props.rep.name}</h3>
      </a>
      <h4 className={slyles.description}>{props.rep.description}</h4>
    </div>
  );
};

export default Repos;
