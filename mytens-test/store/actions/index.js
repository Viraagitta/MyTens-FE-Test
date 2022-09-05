import { DATA_FETCH_SUCCESS, PROFILE_FETCH_SUCCESS } from "./actionType";

export const fetchReposSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    payload,
  };
};
export const fetchRepos = () => {
  return (dispatch, getState) => {
    return fetch("https://api.github.com/users/Viraagitta/repos", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(fetchReposSuccess(data));
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};

export const fetchProfileSuccess = (payload) => {
  return {
    type: PROFILE_FETCH_SUCCESS,
    payload,
  };
};
export const fetchProfile = () => {
  return (dispatch, getState) => {
    return fetch("https://api.github.com/users/Viraagitta", {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(fetchProfileSuccess(data));
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
};
