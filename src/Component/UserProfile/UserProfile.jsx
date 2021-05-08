import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Repos from "./Repos";
import {
  isFetchingSelector,
  userNameSelector,
  userProfileSelector,
  reposSelector,
  totalCountSelector,
  pageSizeSelector,
  currentPageSelector,
} from "../../redux/users-selector";
import slyles from "./UserProfile.module.css";
import Preloader from "../Preloader/Preloader";
import { Pagination } from "antd";
import { getRepos } from "../../redux/users-reduser";

const UserProfile = (props) => {
  const totalItemsCount = useSelector(totalCountSelector);
  const pageSize = useSelector(pageSizeSelector);
  const isFetching = useSelector(isFetchingSelector);
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useDispatch();
  const profile = useSelector(userProfileSelector);
  const onPageChenged = (pageNumber, page) => {
    const login = profile.login;
    dispatch(getRepos(pageNumber, page, login));
  };
  const repos = useSelector(reposSelector);
  let userName = useSelector(userNameSelector);
  return (
    <div className={slyles.userprofile}>
      <div className={slyles.profile}>
        <div className={slyles.img}>
          <img src={profile.avatar_url} />
        </div>
        <a target="_blank" href={`https://github.com/${userName}`}>
          <h3 className={slyles.name}>{profile.name}</h3>
        </a>
        <div>{profile.login}</div>
        <div>
          {profile.followers}followers
          {profile.following}following
        </div>
      </div>
      <div className={slyles.img}>
        <h2>
          {totalItemsCount === 0 ? "" : `Repositories(${totalItemsCount})`}
        </h2>
        <div className={slyles.rep}>
          {totalItemsCount === 0
            ? "Repository list is emply"
            : repos.map((rep) => <Repos key={rep.id} rep={rep} />)}
        </div>
      </div>
      {totalItemsCount === 0 ? (
        ""
      ) : (
        <Pagination
          className={slyles.paginator}
          current={currentPage}
          showSizeChanger={false}
          defaultPageSize={pageSize}
          total={totalItemsCount}
          onChange={onPageChenged}
          showTotal={(totalItemsCount, pageSize) =>
            `${pageSize[0]}-${pageSize[1]} of ${totalItemsCount} items`
          }
        />
      )}
    </div>
  );
};

export default UserProfile;
