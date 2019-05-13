import React, {Component} from 'react'
import _ from 'lodash'


class BSAlert extends Component {
    state = {
        alertClasses: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
        alertClass: 'primary',
        divider: true,
        alertHeader: 'Good Job!',
        alertDescription: 'Here is some text',
        alertAdditionalDescription: 'Additional description'
    };

    changeAlertClass = (e) => {
        this.setState({alertClass: e.target.value})
    };

    changeAlertHeader = (e) => {
        this.setState({alertHeader: e.target.value})
    };

    changeAlertDescription = (e) => {
        this.setState({alertDescription: e.target.value})
    };

    changeAlertAdditionalDescription = (e) => {
        this.setState({alertAdditionalDescription: e.target.value})
    };

    calculateAlertClass = () => {
        return 'alert alert-' + this.state.alertClass;
    };

    changeDivider = () => {
        this.setState({divider: !this.state.divider})
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Alert Class</span>
                            </div>
                            <select defaultValue={this.state.alertClass} onChange={this.changeAlertClass}
                                    className="form-control">
                                {
                                    this.state.alertClasses.map(alertClass => <option value={alertClass}
                                                                                      key={alertClass}>{_.capitalize(alertClass)}</option>)
                                }
                            </select>
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <input type="checkbox" aria-label="Checkbox for following text input"
                                           defaultChecked={this.state.divider} onChange={this.changeDivider}/>Use divider?
                                </span>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Heading and Description</span>
                            </div>
                            <input type="text" aria-label="Header" className="form-control"
                                   onChange={this.changeAlertHeader}
                                   value={this.state.alertHeader}/>
                            <input type="text" aria-label="Description" className="form-control"
                                   onChange={this.changeAlertDescription}
                                   value={this.state.alertDescription}/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Additional Description</span>
                            </div>
                            <input type="text" aria-label="Header" className="form-control"
                                   onChange={this.changeAlertAdditionalDescription}
                                   value={this.state.alertAdditionalDescription}/>
                        </div>
                    </div>
                    <div className="col input-group">
                        <div className={this.calculateAlertClass()} role="alert">
                            <h4 className="alert-heading">{this.state.alertHeader}</h4>
                            <p>{this.state.alertDescription}</p>
                            {this.state.divider ? <hr/> : null}
                            <p className="mb-0">{this.state.alertAdditionalDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BSAlert