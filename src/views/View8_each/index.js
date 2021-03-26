import React, { Component } from 'react';
import Individual_Effort from '../../charts/Individual_Effort';
import './view8_each.css';

export default class View7_each extends Component {
    render() {
        return (
            <div id='view8_each' className='pane'>
                <div className='header'>Individual_Effort</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <Individual_Effort width={1000} height={200}/>
                </div>
            </div>
        )
    }
}