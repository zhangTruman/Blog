import React, { Component } from 'react';
import {
    Skeleton, Switch, Card, Icon, Avatar,Button
  } from 'antd';
  import getRouter from 'router/router';
  const { Meta } = Card;
export default class Content extends Component {
    state = {
        loading:false
    }
    render() {
        const { loading } = this.state;
        return(
            <div>
                <Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
                </Card>
                <Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
                </Card><Card style={{ width: '100%', marginTop: 16 }} loading={loading}>
                <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                />
                </Card>
                {getRouter()}
            </div>
        )
    }
}