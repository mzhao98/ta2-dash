import React, { Component } from 'react';
import data from './data';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import View7 from './views/View7';
import './dashboard.css';

const { Sider, Content, Footer } = Layout;

export default class Dashboard_Team extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: data[0],
            greaterThenAge: 0,
            includedGender: ['Male', 'Female','Unknown'],
        }
    }

    changeSelectUser = value => {
        this.setState({
            selectedUser: value
        })
    }

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        })
    }

    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        })
    }

    render() {
        const {selectedUser, greaterThenAge, includedGender} = this.state;
        const filteredData = data.filter(user=>includedGender.indexOf(user.gender)!==-1)
                                 .filter(user=>user.age>greaterThenAge);
        return (
            <div>
                <Layout style={{ height: 920 }}>

                    <Layout>
                        <Content style={{ height: 550 }}>
                            <View4 user={selectedUser}/>
                        </Content>
                        <Layout style={{ height: 300 }}>
                            <Content>
                                <View5 data={filteredData}/>
                            </Content>
                        </Layout>
                        <Layout style={{ height: 300 }}>
                            <Content>
                                <View7 data={filteredData}/>
                            </Content>

                        </Layout>
                    </Layout>
                </Layout>
                <Layout>
                    <Footer style={{ height: 20 }}>
                        <div style={{marginTop: -10}}>
                            ASIST TA2 CMU
                        </div>
                    </Footer>
                </Layout>
            </div>
        )
    }
}
