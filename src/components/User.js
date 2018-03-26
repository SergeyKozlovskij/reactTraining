import React, {Component} from 'react'


class User extends Component {
    render() {
        const {user, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.roles[0].name}</td>
                <td>{user.roles[0].permissions[0].name}</td>
            </tr>
        )
    }
}

export default User