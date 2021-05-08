import React from "react";
import { useSelector } from "react-redux";
import { userProfileSelector } from "../../redux/users-selector";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./Content.module.css";
import { SearchOutlined } from "@ant-design/icons";

const Content = () => {
  const profile = useSelector(userProfileSelector);
  return (
    <div className={styles.content}>
      {profile === null ? (
        <h2 className={styles.h2}>         
          <SearchOutlined />
          <p>Start with search a Github user</p>
        </h2>
      ) : (
        <UserProfile />
      )}
    </div>
  );
};

export default Content;
