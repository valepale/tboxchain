import React from 'react';
import * as Scrivito from 'scrivito';
import FacebookProvider, { Page } from 'react-facebook';

class PageFacebook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <FacebookProvider appId="274911069718102">
                    <Page href="https://www.facebook.com/tboxchain/" tabs="timeline" />
                </FacebookProvider>
                

                )
    }

}





export default PageFacebook