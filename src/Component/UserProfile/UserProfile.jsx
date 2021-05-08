import React from "react";
import { useSelector } from "react-redux";
import { isFetchingSelector, isFoundSelector, userNameSelector } from "../../redux/users-selector";
import { UserOutlined } from "@ant-design/icons";
import User from "./User";
import slyles from "./UserProfile.module.css";
import Preloader from "../Preloader/Preloader";

const UserProfile = () => {
  const isFound = useSelector(isFoundSelector);
  const user = useSelector(userNameSelector);
  const isFetching = useSelector(isFetchingSelector);
  return (
    <div>
      {isFetching ? (
        <Preloader />
      ) : !isFound ? (
        <div className={slyles.not_found}>
          <UserOutlined />
          <p> User "{user}" not Found </p>
        </div>
      ) : (
        <User />
      )}
    </div>
  );
};

export default UserProfile;
