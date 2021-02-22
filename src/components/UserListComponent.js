import React, { useEffect } from 'react';
import UserComponent from './UserComponent';
import { GET_USERS_REQUESTED } from '../redux/actions/user-action'
import { connect } from 'react-redux'


const UserListComponent = ({ user: { loading, users }, getUsers }) => {
    useEffect(() => {
        console.log(loading);
        getUsers()
        console.log(loading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <table className="table table-striped table-hover" >
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (< UserComponent key={index} index={index} user={user} />))}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch({ type: GET_USERS_REQUESTED })
})


export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent);