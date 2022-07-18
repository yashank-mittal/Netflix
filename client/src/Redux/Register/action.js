import axios from "axios";
import { makeLoginRequest } from "../Login/actions/actions";
import * as actionConstants from "./actionConstants";


function registerRequest() {
  return {
    type: actionConstants.REGISTER_REQUEST,
  };
}

function registerSuccess(response,callback) {
  // window.location = '/profiles';
  callback('/profiles');
  return {
    type: actionConstants.REGISTER_SUCCESS,
    payload: response,
  };
}

function registerFailure(response) {
  return {
    type: actionConstants.REGISTER_FAILURE,
    payload: response,
  };
}

export const registerReset = () => {
  return {
    type: actionConstants.REGISTER_RESET,
  };
};

// export const makeRegisterRequest = async (userDetails) => (dispatch) => {
//   dispatch(registerRequest());
//   axios
//     .post(`${process.env.REACT_APP_BASE_URL}/api/register`, userDetails)
//     .then((res) => {
//       dispatch(makeLoginRequest(userDetails));
//       console.log("yashank at line 37")
//       return dispatch(registerSuccess(res.data.message));
      
//     })
//     .catch((err) => {
//       console.log("yashank at line 41")
//       return dispatch(registerFailure(err.response.data.message));
      
//     });
export const makeRegisterRequest = async (userDetails,redirectTo) =>{
  registerRequest();
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/register`, userDetails)
    .then((res) => {
      makeLoginRequest(userDetails);
      console.log("yashank at line 37")
      return registerSuccess(res.data.message,redirectTo);
      
    })
    .catch((err) => {
      console.log("yashank at line 41")
      return registerFailure(err.response.data.message);
    })
}

// };