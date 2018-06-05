import React, {Component} from 'react'

class EditPage extends Component {
    render() {
        let id = window.location.search.substr(1);
        return (<div>Hello {id}</div>)
    }
}

export default EditPage