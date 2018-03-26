import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import UserTable from "./UserTable/index";

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-3">
                    Users page
                </h1>
                <UserTable/>
            </div>
        )
    }
}

export default App