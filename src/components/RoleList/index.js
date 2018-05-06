import React, {Component} from 'react'
import Role from '../Role'
import roles from '../../fixtures'
import './style.css'

class UserTable extends Component {
    roles = roles.map((role, index) => {
        return (<Role role={role} index={index}/>)
    });

    render() {
        return (
            <ul>{this.roles}</ul>
        )
    }
}

export default UserTable