import React, {Component} from 'react'
import _ from 'lodash'


class Input extends Component {
    state = {
        inputTitle: 'Title',
        inputPlaceholder: 'Type here',
        inputType: 'text',
        inputMaxLength: 15,
        inputTypes: ['text', 'number', 'email', 'color', 'range', 'time', 'week', 'month', 'date']
    };

    changeInputTitle = (e) => {
        this.setState({inputTitle: e.target.value})
    };

    changeInputPlaceholder = (e) => {
        this.setState({inputPlaceholder: e.target.value})
    };

    changeInputType = (e) => {
        this.setState({inputType: e.target.value})
    };

    changeInputMaxLength = (e) => {
        this.setState({inputMaxLength: e.target.value})
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Input Title</span>
                            </div>
                            <input type="text" onChange={this.changeInputTitle} value={this.state.inputTitle}
                                   className="form-control"/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Input Placeholder</span>
                            </div>
                            <input type="text" onChange={this.changeInputPlaceholder}
                                   value={this.state.inputPlaceholder}
                                   className="form-control"/>
                        </div>
                        <div className="input-group" onChange={this.changeInputType}>
                            {
                                this.state.inputTypes.map(type =>
                                    <span className="input-group-text" key={type}>
                                        <input type="radio" name="inputType" value={type}
                                               defaultChecked={this.state.inputType === type}/>{_.capitalize(type)}
                                    </span>)
                            }
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Input Max Length</span>
                            </div>
                            <input type="number" onChange={this.changeInputMaxLength}
                                   value={this.state.inputMaxLength}
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="col input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text form-control">{this.state.inputTitle}</span>
                        </div>
                        <input type={this.state.inputType} className="form-control"
                               placeholder={this.state.inputPlaceholder} maxLength={this.state.inputMaxLength}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input