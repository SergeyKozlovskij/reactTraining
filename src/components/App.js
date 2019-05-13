import React, {Component} from 'react'
import Link from './Link'
import Input from './Input'
import Button from './Button'
import Dropdown from './Dropdown'
import BSAlert from './BSAlert'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Breadcrumb from "./Breadcrumb";

class App extends Component {
    state = {
        link: {isCollapsed: true},
        input: {isCollapsed: true},
        button: {isCollapsed: true},
        dropdown: {isCollapsed: true},
        alert: {isCollapsed: true},
        breadcrumb: {isCollapsed: true}
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

    toggleBreadcrumb = () => {
        this.setState({breadcrumb: {isCollapsed: !this.state.breadcrumb.isCollapsed}});
    };

    toggleChevron = (isCollapsed) => {
        return isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
    };

    render() {
        return (
            <div>
                <h1>Here is some samples of react components, UI based on bootstrap CSS</h1>
                <div>
                    <h3 className="col-6">Link
                        <a onClick={this.toggleLink}>
                        <span
                            className={this.toggleChevron(this.state.link.isCollapsed)}></span>
                        </a>
                    </h3>
                    {this.state.link.isCollapsed ? null : <Link/>}
                </div>
                <div>
                    <h3 className="col-6">Input
                        <a onClick={this.toggleInput}>
                        <span
                            className={this.toggleChevron(this.state.input.isCollapsed)}></span>
                        </a>
                    </h3>
                    {this.state.input.isCollapsed ? null : <Input/>}
                </div>
                <div>
                    <h3 className="col-6">Button
                        <a onClick={this.toggleButton}>
                        <span
                            className={this.toggleChevron(this.state.button.isCollapsed)}></span>
                        </a>
                    </h3>
                    {this.state.button.isCollapsed ? null : <Button/>}
                </div>
                <div>
                    <h3 className="col-6">Dropdown
                        <a onClick={this.toggleDropdown}>
                        <span
                            className={this.toggleChevron(this.state.dropdown.isCollapsed)}></span>
                        </a>
                    </h3>
                    {this.state.dropdown.isCollapsed ? null : <Dropdown/>}
                </div>
                <div>
                    <h3 className="col-6">BSAlert
                        <a onClick={this.toggleAlert}>
                        <span
                            className={this.toggleChevron(this.state.alert.isCollapsed)}></span>
                        </a>
                    </h3>
                    {this.state.alert.isCollapsed ? null : <BSAlert/>}
                </div>
                <div>
                    <h3 className="col-6">Breadcrumb
                        <a onClick={this.toggleBreadcrumb}>
                        <span
                            className={this.toggleChevron(this.state.breadcrumb.isCollapsed)}></span>
                        </a>
                    </h3>
                    {this.state.breadcrumb.isCollapsed ? null : <Breadcrumb/>}
                </div>
            </div>
        )
    }
}

export default App