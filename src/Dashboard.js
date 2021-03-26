import React, { Component } from 'react';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View5_each from './views/View5_each';
import View7 from './views/View7';
import View7_each from './views/View7_each';
import View8 from './views/View8';
import View8_each from './views/View8_each';
import './dashboard.css';

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout style={{ height: 920 }}>
                    <Sider width={300} style={{backgroundColor:'#eee'}}>
                        <Content style={{ height: 300 }}>
                            <View1/>
                        </Content>
                        <Content style={{ height: 300 }}>
                            <View2/>
                        </Content>
                        <Content style={{ height: 300 }}>
                            <View3/>
                        </Content>
                    </Sider>
                    <Layout style={{ height: 3100 }}>
                        <Layout style={{ height: 1000 }}>
                            <Content style={{ height: 800 }}>
                                <View4/>
                            </Content>
                        </Layout>

                        <Layout style={{ height: 2100 }}>
                            <Layout style={{ height: 350 }}>
                                <Content>
                                    <View5/>
                                </Content>
                            </Layout>

                            <Layout style={{ height: 350 }}>
                                <Content>
                                    <View5_each/>
                                </Content>
                            </Layout>



                            <Layout style={{ height: 350 }}>
                                <Content>
                                    <View7/>
                                </Content>
                            </Layout>

                            <Layout style={{ height: 350 }}>
                                <Content>
                                    <View7_each/>
                                </Content>
                            </Layout>

                            <Layout style={{ height: 350 }}>
                                <Content>
                                    <View8/>
                                </Content>
                            </Layout>

                            <Layout style={{ height: 350 }}>
                                <Content>
                                    <View8_each/>
                                </Content>
                            </Layout>

                        </Layout>

                    </Layout>
                </Layout>

            </div>
        )
    }
}
