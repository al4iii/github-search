import { usersAPI } from "../API/api";

const SET_USERS = "users/SET_USERS";
const TOGGELE_IS_FETCHING = "users/TOGGELE_IS_FETCHING";
const SET_REPOS = "users/SET_REPOS";
const SET_REPOS_LENGTH = "users/SET_REPOS_LENGTH";
const SET_USER_NAME = "users/SET_USER_NAME";
const SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";

let initialState = {
  userName: null,
  userProfile: null,
  repos: null,
  toggleIsFetching: false,
  pageSize: 4,
  totalCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, userProfile: action.userProfile };
    case SET_REPOS:
      return { ...state, repos: action.repos };
    case TOGGELE_IS_FETCHING:
      return {
        ...state,
        toggleIsFetching: action.isFetching,
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const setUserProfile = (userProfile) => ({
  type: SET_USERS,
  userProfile,
});
export const setRepos = (repos) => ({ type: SET_REPOS, repos });
export const setUserName = (userName) => ({ type: SET_USER_NAME, userName });

export const toggleIsFetching = (isFetching) => ({
  type: TOGGELE_IS_FETCHING,
  isFetching,
});
export const setTotalReposCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});
export const setCurrentPages = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const getUsers = (user) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setUserName(user));
  let response = await usersAPI.getUser(user);
  dispatch(setUserProfile(response));
  const currentPage = initialState.currentPage;
  const pageSize = initialState.pageSize;
  dispatch(getRepos(currentPage, pageSize, user));
  dispatch(getReposLength(user));
  dispatch(setCurrentPages(currentPage));
  dispatch(toggleIsFetching(false));
};

export const getRepos = ( currentPage, pageSize = initialState.pageSize, user = initialState.userName ) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPages(currentPage));
  let response = await usersAPI.getRepos(currentPage, pageSize, user);
  dispatch(setRepos(response));
  dispatch(toggleIsFetching(false));
};

export const getReposLength = (userName) => async (dispatch) => {
  let response = await usersAPI.getReposLength(userName);
  dispatch(setTotalReposCount(response));
};

export default usersReducer;
