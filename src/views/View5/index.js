import React, { Component } from 'react';
import LineChart_CER from '../../charts/LineChart_CER';
import './view5.css';

export default class View5 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='view5' className='pane'>
                <div className='header'>Coverage</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <LineChart_CER data={data} width={1000} height={300}/>
                </div>                
            </div>
        )
    }
}