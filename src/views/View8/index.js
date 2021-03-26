import React, { Component } from 'react';
import LineChart_CER3 from '../../charts/LineChart_CER3';
import './view8.css';

export default class View8 extends Component {
    render() {
        return (
            <div id='view8' className='pane'>
                <div className='header'>Effort</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <LineChart_CER3 width={1000} height={250}/>
                </div>
            </div>
        )
    }
}