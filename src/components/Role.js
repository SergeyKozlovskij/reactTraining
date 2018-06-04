import React, {Component} from 'react'


class Role extends Component {
    state = {
        permissionOpen: false
    };
    expandPermission = () => {
        this.setState({permissionOpen: !this.state.permissionOpen})
    };

    render() {
        const {role, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td className="role_li" key={role.id}>{role.roleCode}</td>
                <td>
                    <button onClick={this.expandPermission}>>></button>
                </td>
                <td>
                    {this.state.permissionOpen && role.permissions.map(permission => permission.permissionCode).join(", ")}
                </td>
            </tr>
        )
    }
}

export default Role