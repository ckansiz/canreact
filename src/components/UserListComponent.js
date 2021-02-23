import React, { useEffect } from "react";
import UserComponent from "./UserComponent";
import { getAllUsersAction } from "../redux/actions/user-action";
import { useSelector, useDispatch } from "react-redux";

const UserListComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  const userOnClick = (user) => {
    console.log(user.name);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
          <th scope="col">Company</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserComponent
            key={index}
            index={index}
            user={user}
            onclick={userOnClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserListComponent;
