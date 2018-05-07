import React, {Component} from 'react'
import Role from '../Role'
import roles from '../../fixtures'
import './style.css'

class UserTable extends Component {


    roles = roles.map((role, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td className="role_li" key={role.id}>{role.roleCode}</td>
                <td>{role.permissions.map(permission => {
                    return permission.permissionCode;
                }).concat(", ")}</td>
            </tr>
        )
    });

    render() {
        return (<table className="table table-striped table-bordered">
            <tr>
                <th>#</th>
                <th>RoleCode</th>
                <th>Permissions</th>
            </tr>
            <tbody>{this.roles}</tbody>
        </table>)
    }
}

export default UserTable