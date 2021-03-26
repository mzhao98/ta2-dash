import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        const width = 260;
        const height = 260;
        return (
            <div id='view1' className='pane'>
                <div className='header'>Participant Skills Profile A (YELLOW) </div>
                <div>
                    <div className={'info-view'}>
                        <div>Physical Search Walking Skill: PLACEHOLDER</div>
                        <div>Physical Search Obstacle Skill: </div>
                        <div>Cognitive Search Pathing Decision: </div>
                        <div>Cognitive Search Knowledge Based: </div>
                        <div></div>
                        <div><strong>ROLE: SEARCHER </strong> </div>
                    </div>
                </div>
            </div>
        )
    }
}
