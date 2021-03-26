import React, { Component } from 'react';
import LineChart_CER3 from '../../charts/LineChart_CER3';
import './view3.css';

export default class View7 extends Component {
    render() {
        const width = 260;
        const height = 260;
        return (
            <div id='view1' className='pane'>
                <div className='header'>Participant Skills Profile C (PINK)</div>
                <div>
                    <div className={'info-view'}>
                        <div>Physical Search Walking Skill: </div>
                        <div>Physical Search Obstacle Skill: </div>
                        <div>Cognitive Search Pathing Decision: </div>
                        <div>Cognitive Search Knowledge Based: </div>
                        <div></div>
                        <div><strong>ROLE: ENGINEER </strong> </div>
                    </div>
                </div>
            </div>
        )
    }
}