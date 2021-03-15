import React, { Component } from 'react';
import './view4.css';
import ScatterPlot from '../../charts/ScatterPlot';
//import d3Utils from './utils';
//import d3Config from './config';

//export default class View4 extends Component {
//    render() {
//        const {user} = this.props,
//              width = 1100,
//              height = 250;
//        return (
//            <div id='view4' className='pane' >
//                <div className='header'>User Acivities</div>
//                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
//                    <LineChart data={user} width={width} height={height}/>
//                </div>
//            </div>
//        )
//    }
//}


export default class View4 extends Component {
    render() {
        const {user} = this.props,
              width = 1100,
              height = 900;
        return (
            <div id='view4' className='pane' >
                <div className='header'>Participant Trajectory: (P26) </div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                    <ScatterPlot data={user} width={width} height={height}/>
                </div>
            </div>
        )
    }
}