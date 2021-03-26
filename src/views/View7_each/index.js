import React, { Component } from 'react';
import Individual_Redundancy from '../../charts/Individual_Redundancy';
import './view7_each.css';

export default class View7_each extends Component {
    render() {
        return (
            <div id='view7_each' className='pane'>
                <div className='header'>Individual_Redundancy</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <Individual_Redundancy width={1000} height={200}/>
                </div>
            </div>
        )
    }
}