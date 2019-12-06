import React, {Component} from 'react'
import Link from './Link'
import Input from './Input'
import Button from './Button'
import Dropdown from './Dropdown'
import Alert from './Alert'
import Users from './Users'
import UserForm from './UserForm'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class App extends Component {
    state = {
        link: {isCollapsed: true},
        input: {isCollapsed: true},
        button: {isCollapsed: true},
        dropdown: {isCollapsed: true},
        alert: {isCollapsed: true}
    };

    toggleLink = () => {
        this.setState({link: {isCollapsed: !this.state.link.isCollapsed}});
    };

    toggleInput = () => {
        this.setState({input: {isCollapsed: !this.state.input.isCollapsed}});
    };

    toggleButton = () => {
        this.setState({button: {isCollapsed: !this.state.button.isCollapsed}});
    };

    toggleDropdown = () => {
        this.setState({dropdown: {isCollapsed: !this.state.dropdown.isCollapsed}});
    };

    toggleAlert = () => {
        this.setState({alert: {isCollapsed: !this.state.alert.isCollapsed}});
    };

    render() {
        return (
            <div>
                <UserForm/>
                <Users/>
                <h1>Here is some samples of react components, UI based on bootstrap CSS</h1>
                <h3 className="col-6">Link
                    <a onClick={this.toggleLink}>
                        <span
                            className={this.state.link.isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'}></span>
                    </a>
                </h3>
                {this.state.link.isCollapsed ? null : <Link/>}
                <h3 className="col-6">Input
                    <a onClick={this.toggleInput}>
                        <span
                            className={this.state.input.isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'}></span>
                    </a>
                </h3>
                {this.state.input.isCollapsed ? null : <Input/>}
                <h3 className="col-6">Button
                    <a onClick={this.toggleButton}>
                        <span
                            className={this.state.button.isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'}></span>
                    </a>
                </h3>
                {this.state.button.isCollapsed ? null : <Button/>}
                <h3 className="col-6">Dropdown
                    <a onClick={this.toggleDropdown}>
                        <span
                            className={this.state.dropdown.isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'}></span>
                    </a>
                </h3>
                {this.state.dropdown.isCollapsed ? null : <Dropdown/>}
                <h3 className="col-6">Alert
                    <a onClick={this.toggleAlert}>
                        <span
                            className={this.state.alert.isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'}></span>
                    </a>
                </h3>
                {this.state.alert.isCollapsed ? null : <Alert/>}
            </div>
        )
    }
}

export default App