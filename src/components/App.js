import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import RoleList from './RoleList';
import EditPage from './EditPage'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.pathname.substr(1)
        }
    }

    componentDidMount(){
        this.setState = {
            route: window.location.pathname.substr(1)
        }
    }

    render() {
        let Child;
        switch (this.state.route) {
            case 'edit': Child = EditPage; break;
            default: Child = RoleList;
        }

        return (
            <div className="container">
                <Child/>
            </div>
        )
    }
}

export default App