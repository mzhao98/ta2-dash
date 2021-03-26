import React, { Component } from 'react';
import './view4.css';
import ScatterPlot from '../../charts/ScatterPlot';


export default class View4 extends Component {
    render() {
        const width = 1100;
        const height = 900;
        return (
            <div id='view4' className='pane' >
                <div className='header'>Participant Trajectory: (P26) </div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                    <ScatterPlot width={width} height={height}/>
                </div>
            </div>
        )
    }
}