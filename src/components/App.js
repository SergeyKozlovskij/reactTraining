import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import RoleList from "./RoleList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <RoleList/>
            </div>
        )
    }
}

export default App