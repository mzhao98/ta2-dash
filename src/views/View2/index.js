import React, { Component } from 'react';
import './view2.css';
import PieChart from '../../charts/PieChart';

export default class View2 extends Component {
    render() {
        const {data} = this.props;
        const width = 260;
        const height = 260;
        return (
            <div id='view2' className='pane'>
                <div className='header'>Participant Skills Profile B (BLUE)</div>
                <div>
                    <div className={'info-view'}>
                        <div>Physical Search Walking Skill: 0.8473</div>
                        <div>Physical Search Obstacle Skill: 0.1294</div>
                        <div>Cognitive Search Pathing Decision: 5.2319</div>
                        <div>Cognitive Search Knowledge Based: 4.3948</div>
                        <div></div>
                        <div><strong>ROLE: MEDIC </strong> </div>
                    </div>
                </div>
            </div>

        )
    }
}