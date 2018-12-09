import React, { Component } from 'react';

import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sider from '../../components/Sider/Sider';
import getRouter from 'router/router';
import './index.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className='main'>
                    <div className='content'>
                        <Content></Content>
                    </div>
                    <div className='sider'>
                        <Sider></Sider>
                    </div>
                </div>
                {/* {getRouter()} */}
            </div>
        )
    }
}