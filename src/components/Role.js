import React, {Component} from 'react'


class Role extends Component {
    render() {
        const {role, index} = this.props;
        return (
            <div className="card">
                <li className="role_li" key={role.id}>{index + 1} {role.roleCode}</li>
            </div>
        )
    }
}

export default Role