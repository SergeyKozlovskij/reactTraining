import React, {Component} from 'react'
import _ from 'lodash'


class Dropdown extends Component {
    state = {
        options: [
            {name: 'First Option', value: 'first option'},
            {name: 'Second Option', value: 'second option'},
            {name: 'Third Option', value: 'third option'}
        ],
        newOption: '',
        sortEnabled: false,
        dropdownTitle: 'Title'
    };

    changeOption = (e) => {
        this.setState({newOption: e.target.value})
    };

    changeDropdownTitle = (e) => {
        this.setState({dropdownTitle: e.target.value})
    };

    addOption = () => {
        if (!_.isEmpty(this.state.newOption)) {
            this.state.options.push({name: this.state.newOption, value: _.lowerCase(this.state.newOption)});
        }
        this.setState({newOption: ''})
    };

    enableSort = () => {
        this.setState({sortEnabled: !this.state.sortEnabled})
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Dropdown Title</span>
                            </div>
                            <input type="text" onChange={this.changeDropdownTitle} value={this.state.dropdownTitle}
                                   className="form-control"/>
                            <div className="input-group-append">
                                <span className="input-group-text">
                                <input type="checkbox" defaultChecked={this.state.sortEnabled}
                                       onChange={this.enableSort}/>Sort Enabled?
                            </span>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Add Option</span>
                            </div>
                            <input type="text" onChange={this.changeOption} value={this.state.newOption}
                                   className="form-control"/>
                            <div className="input-group-append">
                                <button onClick={this.addOption} className="input-group-text"><span
                                    className="glyphicon glyphicon-plus"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="col btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle form-control"
                                data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">{this.state.dropdownTitle}</button>
                        <div className="dropdown-menu">
                            {
                                this.state.sortEnabled ? _.sortBy(this.state.options, 'value')
                                        .map(option => <a className="dropdown-item" href={option.value}
                                                          key={option.value}>{option.name}</a>) :
                                    this.state.options
                                        .map(option => <a className="dropdown-item" href={option.value}
                                                          key={option.value}>{option.name}</a>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown