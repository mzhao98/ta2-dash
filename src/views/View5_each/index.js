import React, { Component } from 'react';
import Individual_Coverage from '../../charts/Individual_Coverage';
import './view5_each.css';

export default class View5_each extends Component {
    render() {
        return (
            <div id='view5_each' className='pane'>
                <div className='header'>Individual_Coverage</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <Individual_Coverage width={1000} height={200}/>
                </div>                
            </div>
        )
    }
}