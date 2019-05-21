import React, {Component} from 'react'
import Section from './Section'
import Link from "./Link";
import Input from './Input'
import Button from './Button'
import Dropdown from './Dropdown'
import BSAlert from './BSAlert'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Breadcrumb from "./Breadcrumb";

class App extends Component {
    render() {
        return (
            <main>
                <Section tag={Link} name="Link"/>
                <Section tag={Input} name="Input"/>
                <Section tag={Button} name="Button"/>
                <Section tag={Dropdown} name="Dropdown"/>
                <Section tag={BSAlert} name="BsAlert"/>
                <Section tag={Breadcrumb} name="Breadcrumb"/>
            </main>
        )
    }
}

export default App