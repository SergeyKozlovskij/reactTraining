import React, {Component} from 'react'
import _ from 'lodash'


class Button extends Component {
    state = {
        buttonTitle: 'Title',
        outline: true,
        buttonClass: 'primary',
        buttonClasses: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
        buttonWidth: 100,
        alertMessage: 'will be displayed on alert',
        disabled: false
    };

    changeButtonTitle = (e) => {
        this.setState({buttonTitle: e.target.value})
    };

    changeButtonClass = (e) => {
        this.setState({buttonClass: e.target.value})
    };

    changeButtonWidth = (e) => {
        this.setState({buttonWidth: e.target.value})
    };

    changeAlertMessage = (e) => {
        this.setState({alertMessage: e.target.value})
    };

    changeOutline = () => {
        this.setState({outline: !this.state.outline})
    };

    changeDisabled = () => {
        this.setState({disabled: !this.state.disabled})
    };

    calculateButtonClass = () => {
        if (this.state.outline) {
            return 'btn form-control btn-outline-' + this.state.buttonClass;
        } else {
            return 'btn form-control btn-' + this.state.buttonClass;
        }
    };

    showMessage = () => {
        alert(this.state.alertMessage);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Button Title</span>
                            </div>
                            <input type="text" onChange={this.changeButtonTitle} value={this.state.buttonTitle}
                                   className="form-control"/>
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input"
                                           defaultChecked={this.state.disabled} onChange={this.changeDisabled}/>Disabled?
                                </span>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Button Class</span>
                            </div>
                            <select defaultValue={this.state.buttonClass} onChange={this.changeButtonClass}
                                    className="form-control">
                                {
                                    this.state.buttonClasses.map(buttonClass => <option value={buttonClass} key={buttonClass}>{_.capitalize(buttonClass)}</option>)
                                }
                            </select>
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input"
                                           defaultChecked={this.state.outline} onChange={this.changeOutline}/>Outline?
                                </span>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Button width (%)</span>
                            </div>
                            <input type="range" onChange={this.changeButtonWidth}
                                   value={this.state.buttonWidth}
                                   className="form-control"/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Alert Message</span>
                            </div>
                            <input type="text" onChange={this.changeAlertMessage} value={this.state.alertMessage}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col input-group">
                        <button type="button" className={this.calculateButtonClass()}
                                style={{'maxWidth': (this.state.buttonWidth + '%')}} onClick={this.showMessage}
                                disabled={this.state.disabled}>{this.state.buttonTitle}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Button