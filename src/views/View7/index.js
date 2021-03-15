import React, { Component } from 'react';
import LineChart_CER2 from '../../charts/LineChart_CER2';
import './view7.css';

export default class View7 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='view7' className='pane'>
                <div className='header'>Redundancy</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <LineChart_CER2 data={data} width={1000} height={250}/>
                </div>
            </div>
        )
    }
}