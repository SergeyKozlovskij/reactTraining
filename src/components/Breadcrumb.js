import React, {Component} from 'react'
import _ from 'lodash'

class Breadcrumb extends Component {
    state = {
        breadcrumbs: ['Home', 'Library', 'Data'],
        newStep: 'new step'
    };

    changeStep = (e) => {
        this.setState({newStep: e.target.value})
    };

    addStepInHead = () => {
        if (!_.isEmpty(this.state.newStep)) {
            this.state.breadcrumbs.unshift(_.capitalize(this.state.newStep));
        }
        this.setState({newStep: ''})
    };

    addStepInTail = () => {
        if (!_.isEmpty(this.state.newStep)) {
            this.state.breadcrumbs.push(_.capitalize(this.state.newStep));
        }
        this.setState({newStep: ''})
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button onClick={this.addStepInHead} className="input-group-text"><span
                                className="glyphicon glyphicon-plus">In Head</span></button>
                        </div>
                        <input type="text" value={this.state.newStep} onChange={this.changeStep}
                               className="form-control"/>
                        <div className="input-group-append">
                            <button onClick={this.addStepInTail} className="input-group-text"><span
                                className="glyphicon glyphicon-plus">In Tail</span></button>
                        </div>
                    </div>
                </div>
                <div className="col input-group">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            {this.state.breadcrumbs.map((breadcrumb, index) =>
                                index < this.state.breadcrumbs.length - 1 ?
                                    <li className="breadcrumb-item" key={breadcrumb}><a href="/">{breadcrumb}</a></li> :
                                    <li className="breadcrumb-item active" aria-current="page"
                                        key={breadcrumb}>{breadcrumb}</li>
                            )}
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Breadcrumb