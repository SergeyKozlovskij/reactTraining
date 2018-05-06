import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import RoleList from "./RoleList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-3">
                    RolePermission Setup
                </h1>
                <RoleList/>
            </div>
        )
    }
}

export default App