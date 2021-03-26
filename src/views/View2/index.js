import React, { Component } from 'react';
import './view2.css';

export default class View2 extends Component {
    render() {
        const width = 260;
        const height = 260;
        return (
            <div id='view2' className='pane'>
                <div className='header'>Participant Skills Profile B (BLUE)</div>
                <div>
                    <div className={'info-view'}>
                        <div>Physical Search Walking Skill: </div>
                        <div>Physical Search Obstacle Skill: </div>
                        <div>Cognitive Search Pathing Decision: </div>
                        <div>Cognitive Search Knowledge Based: </div>
                        <div></div>
                        <div><strong>ROLE: MEDIC </strong> </div>
                    </div>
                </div>
            </div>

        )
    }
}