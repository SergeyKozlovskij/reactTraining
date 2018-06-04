import React, {Component} from 'react'
import Role from '../Role'
import roles from '../../fixtures'
import './style.css'

class RoleTable extends Component {

    roles = roles.map((role, index) => {
        return (<Role role={role} index={index}/>)
    });

    render() {
        return (<table className="table table-striped table-bordered">
            <tbody>
            <tr>
                <th>#</th>
                <th>RoleCode</th>
                <th>Expand</th>
                <th>Permissions</th>
            </tr>
            {this.roles}
            </tbody>
        </table>)
    }
}

export default RoleTable