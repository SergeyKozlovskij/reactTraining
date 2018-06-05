import React, {Component} from 'react'
import roles from '../fixtures'
import permissions from '../permissions'
import _ from 'lodash'

class EditPage extends Component {
    render() {
        let id = window.location.search.substr(1);
        let role = _.find(roles, {'id': id});
        let rolePermissions = role.permissions.map(permission => <li key={permission.permissionCode}>{permission.permissionCode}</li>);
        let availablePermission = _.xorBy(permissions, role.permissions, 'permissionCode').map(permission => <li key={permission.permissionCode}>{permission.permissionCode}</li>);
        return (<div className="row">
            <div className="col-md-6"><h2>{role.roleCode}</h2>
                <ol>{rolePermissions}</ol>
            </div>
            <div className="col-md-6"><h2>Available Permissions</h2>
                <ol>{availablePermission}</ol>
            </div>
        </div>)
    }
}

export default EditPage