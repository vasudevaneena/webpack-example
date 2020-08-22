import {
  FETCH_CAPSULES_REQUEST,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_FAILURE,
  FETCH_LANDING_PAD_SUCCESS,
  FETCH_LANDING_PAD_FAILURE
} from "./actionTypesConstant";
import Moment from 'moment'
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
export const fetchLandingPadFailure = (errors) => {
  return {
    type: FETCH_LANDING_PAD_FAILURE,
    payload: errors,
  };
};
export const fetchLandingPadSuccess = (users) => {
  return {
    type: FETCH_LANDING_PAD_SUCCESS,
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
      .getApiData(url)
      .then((response) => {      
        dispach(fetchCapsulesSuccess(response.sort((a,b)=> new Moment(a.original_launch) - new Moment(b.original_launch))));
      })
      .catch((err) => {
        dispach.fetchCapsulesFailure(err.message);
      });
  };
};

export const fetchLandingPad = (url) => {
 // console.log('fetchLandingPad')
  return (dispach) => {
    unsplash
      .getApiData(url)
      .then((response) => {      
        dispach(fetchLandingPadSuccess(response))
      })
      .catch((err) => {
        dispach.fetchLandingPadFailure(err.message);
      });
  };
};
