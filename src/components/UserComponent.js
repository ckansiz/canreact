import React from 'react';

const UserComponent = ({user, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
        </tr>
    );
}

export default UserComponent;