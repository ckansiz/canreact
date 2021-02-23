import { getAllUsers } from "../api/user-api";

export const SET_LOADING = "SET_LOADING";
export const GET_USERS = "GET_USERS";
export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";

export const getAllUsersAction = () => ({ type: GET_USERS_REQUESTED });
