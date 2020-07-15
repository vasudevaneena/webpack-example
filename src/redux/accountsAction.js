import {
  FETCH_CAPSULES_REQUEST,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_FAILURE,
} from "./actionTypesConstant";

import unsplash from "../service/unsplash";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_CAPSULES_REQUEST,
  };
};
export const fetchCapsulesSuccess = (users) => {
  return {
    type: FETCH_CAPSULES_SUCCESS,
    payload: users,
  };
};
export const fetchCapsulesFailure = (errors) => {
  return {
    type: FETCH_CAPSULES_FAILURE,
    payload: errors,
  };
};

export const fetchCapsules = (url) => {
  return (dispach) => {
    unsplash
      .getCapsules(url)
      .then((response) => {
        const users = response;
        console.log("hii", response);
        dispach(fetchCapsulesSuccess(users));
      })
      .catch((err) => {
        dispach.fetchCapsulesFailure(err.message);
      });
  };
};
