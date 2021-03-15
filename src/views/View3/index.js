import React, { Component } from 'react';
import LineChart_CER3 from '../../charts/LineChart_CER3';
import './view3.css';

export default class View7 extends Component {
    render() {
        const {data} = this.props;
        return (
            <div id='view1' className='pane'>
                <div className='header'>Participant Skills Profile C (PINK)</div>
                <div>
                    <div className={'info-view'}>
                        <div>Physical Search Walking Skill: 0.3958</div>
                        <div>Physical Search Obstacle Skill: 0.5938</div>
                        <div>Cognitive Search Pathing Decision: 4.3948</div>
                        <div>Cognitive Search Knowledge Based: 5.4957</div>
                        <div></div>
                        <div><strong>ROLE: DEBRIS CLEARING </strong> </div>
                    </div>
                </div>
            </div>
        )
    }
}