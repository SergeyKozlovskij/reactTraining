import React, {Component} from 'react'


class Input extends Component {
    state = {
        inputTitle: 'Title',
        inputPlaceholder: 'Type here',
        inputType: 'text',
        inputMaxLength: 15
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
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='text'
                                       defaultChecked={this.state.inputType === 'text'}/>Text
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='number'
                                       defaultChecked={this.state.inputType === 'number'}/>Number
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='email'
                                       defaultChecked={this.state.inputType === 'email'}/>Email
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='color'
                                       defaultChecked={this.state.inputType === 'color'}/>Color
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='range'
                                       defaultChecked={this.state.inputType === 'range'}/>Range
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='time'
                                       defaultChecked={this.state.inputType === 'time'}/>Time
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='week'
                                       defaultChecked={this.state.inputType === 'week'}/>Week
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='month'
                                       defaultChecked={this.state.inputType === 'month'}/>Month
                            </span>
                            <span className="input-group-text">
                                <input type="radio" name="inputType" value='date'
                                       defaultChecked={this.state.inputType === 'date'}/>Date
                            </span>
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