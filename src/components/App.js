import React, {Component} from 'react'
import Link from './Link'
import Input from './Input'
import Button from './Button'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

class App extends Component {
    state = {
        link: {isCollapsed: true},
        input: {isCollapsed: true},
        button: {isCollapsed: true}
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

    render() {
        return (
            <div>
                <h1>Here is some samples of react components</h1>
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
            </div>
        )
    }
}

export default App