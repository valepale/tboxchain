import React from 'react';
import * as Scrivito from 'scrivito';
import FacebookProvider, { Page } from 'react-facebook';

class PageFacebook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <FacebookProvider appId="952232271499119">
                    <Page href="https://www.facebook.com/valeria.palermo.144/" tabs="timeline" />
                </FacebookProvider>
                

                )
    }

}





export default PageFacebook