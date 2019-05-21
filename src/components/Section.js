import React, {Component} from 'react'

class Section extends Component {
    state = {
        isCollapsed: true
    };

    toggleSection = () => {
        this.setState({isCollapsed: !this.state.isCollapsed});
    };

    toggleChevron = (isCollapsed) => {
        return isCollapsed ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up';
    };

    render() {
        const TagName = this.props.tag;
        return (
            <section>
                <h3 className="col-6">{this.props.name}
                    <a onClick={this.toggleSection}>
                        <span
                            className={this.toggleChevron(this.state.isCollapsed)}></span>
                    </a>
                </h3>
                {this.state.isCollapsed ? null : <TagName/>}
            </section>
        )
    }
}

export default Section