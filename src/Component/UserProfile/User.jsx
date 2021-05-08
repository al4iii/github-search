import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Repos from "./Repos";
import { userNameSelector, userProfileSelector, reposSelector,
  totalCountSelector, pageSizeSelector, currentPageSelector } from "../../redux/users-selector";
import slyles from "./UserProfile.module.css";
import { Pagination } from "antd";
import { getRepos } from "../../redux/users-reduser";
import { TeamOutlined, UserOutlined, CloseCircleOutlined } from "@ant-design/icons";

const User = () => {
  const totalItemsCount = useSelector(totalCountSelector);
  const pageSize = useSelector(pageSizeSelector);
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
          <img src={profile.avatar_url} alt={"avatar"} />
        </div>
        <div className={slyles.name}>
          <h3> {profile.name}</h3>
        </div>
        <div className={slyles.login}>
          <a target="_blank" rel="noreferrer" href={`https://github.com/${userName}`} >
            {profile.login}
          </a>
        </div>
        <div className={slyles.followers}>
          <TeamOutlined /> {profile.followers} followers <UserOutlined />{" "}
          {profile.following} following
        </div>
      </div>
      <div className={slyles.img}>
        <h2>
          {totalItemsCount === 0 ? "" : `Repositories(${totalItemsCount})`}
        </h2>
        <div className={slyles.rep}>
          {totalItemsCount === 0 ? (
            <div>
              <CloseCircleOutlined /> Repository list is emply
            </div>
          ) : (
            repos.map((rep) => <Repos key={rep.id} rep={rep} />)
          )}
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

export default User;
