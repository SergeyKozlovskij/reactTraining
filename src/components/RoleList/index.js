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
                <th width="1%">#</th>
                <th width="10%">RoleCode</th>
                <th width="3%">Expand</th>
                <th width="85%">Permissions</th>
                <th width="1%">Edit</th>
            </tr>
                {this.roles}
            </tbody>
        </table>)
    }
}

export default RoleTable