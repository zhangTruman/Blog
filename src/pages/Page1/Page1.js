import React, {Component} from 'react';
import './Page1.css'
import testPic from './images/test.jpg';

export default class Page1 extends Component {
    componentDidMount() {
        console.log(88888)
    }
    render() {
        console.log(88888)
        return (
            <div className='page-box'>
                this is Page111~
                <img src={testPic}></img>
            </div>
        )
    }
}
