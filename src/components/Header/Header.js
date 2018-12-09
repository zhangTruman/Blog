import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import './Header.css';
export default class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='header-title'>三问随笔</div>
                <div className='tab-list'>
                    <div className='tab-li'><Link to='/home'>首页</Link> </div>
                    <div className='tab-li'><Link to='/note'>我的笔记</Link> </div> 
                    <div className='tab-li'><Link to='/mark'>好文收藏库</Link> </div>
                    <div className='tab-li'><Link to='/resume'>个人介绍</Link> </div>
                </div>
            </div>
        )
    }
}