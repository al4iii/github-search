import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/users-reduser";
import styles from "./Header.module.css";

const SearchUsers = () => {
  const dispatch = useDispatch();
  let [user, setUser] = useState("");
  const onStatusChenge = (e) => setUser(e.currentTarget.value);
  const searchUser = () => dispatch(getUsers(user));
  return (
    <div>
      <input autoFocus={true} value={user} onChange={onStatusChenge} />
      <button onClick={searchUser} className={styles.button}>
        search
      </button>
    </div>
  );
};

export default SearchUsers;
