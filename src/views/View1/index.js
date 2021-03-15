import React, { Component } from 'react';
import { Avatar } from 'antd';
import './view1.css';

export default class View1 extends Component {
    render() {
        let {user} = this.props;
        if (user === null) {
            user = {
                name: 'null',
                gender: 'null',
                age: 'null',
            }
        }
        return (
            <div id='view1' className='pane'>
                <div className='header'>Participant Skills Profile A (YELLOW) </div>
                <div>
                    <div className={'info-view'}>
                        <div>Physical Search Walking Skill: 0.2535</div>
                        <div>Physical Search Obstacle Skill: 0.8286</div>
                        <div>Cognitive Search Pathing Decision: 7.2545</div>
                        <div>Cognitive Search Knowledge Based: 9.7518</div>
                        <div></div>
                        <div><strong>ROLE: SEARCHER </strong> </div>
                    </div>
                </div>
            </div>
        )
    }
}
