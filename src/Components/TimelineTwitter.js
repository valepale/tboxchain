import React from 'react';
import * as Scrivito from 'scrivito';
import { Timeline } from 'react-twitter-widgets';

class TimelineTwitter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                <Timeline
                    dataSource={{sourceType: 'profile', screenName: 'tboxchain'}}
                    options={{username: 'TboxChain', height: '400' }}
                    
                    />

                                )
                    }

                }





        export default TimelineTwitter