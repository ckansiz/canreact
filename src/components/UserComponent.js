import React from "react";

const UserComponent = ({ user, index, onclick }) => {
  return (
    <tr>
      <td>{++index}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company.name}</td>
      <td>
        <button
          type="button"
          class="btn btn-link"
          onClick={() => onclick(user)}
        >
          Link
        </button>
      </td>
    </tr>
  );
};

export default UserComponent;
