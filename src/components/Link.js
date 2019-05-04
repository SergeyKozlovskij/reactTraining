import React, {Component} from 'react'


class Link extends Component {
    state = {
        isCollapsed: true,
        linkText: 'Click me',
        linkTarget: 'https://i.redd.it/ce8vxbsbjev21.jpg',
        newWindow: true,
        linkColor: 'blue'
    };

    changeLinkText = (e) => {
        this.setState({linkText: e.target.value})
    };

    changeLinkTarget = (e) => {
        this.setState({linkTarget: e.target.value})
    };

    changeLinkColor = (e) => {
        this.setState({linkColor: e.target.value})
    };

    changeNewWindow = () => {
        this.setState({newWindow: !this.state.newWindow})
    };

    toggle = () => {
        this.setState({isCollapsed: !this.state.isCollapsed})
    };

    render() {
        return (
            <div>
                <h3>Link
                    <a onClick={this.toggle}>
                        <span className={this.state.isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'}></span>
                    </a>
                </h3>

                {this.state.isCollapsed ? null :
                    <div className="row">
                        <div className="col">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Link Text</span>
                                </div>
                                <input type="text" onChange={this.changeLinkText} value={this.state.linkText}
                                       className="form-control"/>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Link Target</span>
                                </div>
                                <input type="text" onChange={this.changeLinkTarget} value={this.state.linkTarget}
                                       className="form-control"/>
                                <div className="input-group-append">
                                <span className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input" defaultChecked={this.state.newWindow} onChange={this.changeNewWindow}/>New window?
                                </span>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Link Color</span>
                                </div>
                                <select defaultValue={this.state.linkColor} onChange={this.changeLinkColor}
                                        className="form-control">
                                    <option value="blue">blue</option>
                                    <option value="red">red</option>
                                    <option value="green">green</option>
                                    <option value="black">black</option>
                                </select>
                            </div>
                        </div>
                        <div className="col"><a style={{'color': this.state.linkColor}} href={this.state.linkTarget} target={this.state.newWindow ? 'blank' : ''}>{this.state.linkText}</a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Link