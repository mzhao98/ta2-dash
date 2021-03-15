import React, { Component } from 'react';
import Individual_Coverage from '../../charts/Individual_Coverage';
import './view5_each.css';

export default class View5 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='view5_each' className='pane'>
                <div className='header'>Coverage</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                <Individual_Coverage data={data} width={1000} height={200}/>
                </div>                
            </div>
        )
    }
}