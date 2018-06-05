import React, {Component} from 'react'
import Roles from '../fixtures'
import Permissions from '../permissions'
import _ from 'lodash'

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.id = window.location.search.substr(1);
        this.state = {
            role: _.find(Roles, {'id': this.id})
        };
    }

    checkPermission = (permission) => {
        let role = this.state.role;
        role.permissions = _.xorBy(role.permissions, [permission], 'permissionCode')
        this.setState(role)
    };

    render() {

        let rolePermissions = this.state.role.permissions.map(permission => <li className="list-group-item"
                                                                                key={permission.permissionCode}
                                                                                onClick={this.checkPermission.bind(this, permission)}>{permission.permissionCode}</li>);
        let availablePermission = _.xorBy(Permissions, this.state.role.permissions, 'permissionCode').map(permission =>
            <li className="list-group-item" key={permission.permissionCode}
                onClick={this.checkPermission.bind(this, permission)}>{permission.permissionCode}</li>);

        return (<div className="row">
            <div className="col-md-6"><h2>{this.state.role.roleCode}</h2>
                <ol className="list-group">{rolePermissions}</ol>
            </div>
            <div className="col-md-6"><h2>Available Permissions</h2>
                <ol className="list-group">{availablePermission}</ol>
            </div>
        </div>)
    }
}

export default EditPage