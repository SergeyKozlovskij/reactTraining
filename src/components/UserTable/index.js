import React, {Component} from 'react'
import User from '../User'
import users from '../../fixtures'
import './style.css'

class UserTable extends Component {
    users = users.map((user, index) => {
        return (<User user={user} index={index}/>)
    });

    render() {
        return (
            <table border="1">
                <thead>
                <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Roles</th>
                    <th>Permissions</th>
                </tr>
                </thead>
                <tbody>{this.users}</tbody>
            </table>
        )
    }
}

export default UserTable