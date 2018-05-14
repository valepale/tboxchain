import React from 'react';
import Helmet from 'react-helmet';


        class FooterLandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");
       
        script.async = true;
        this.instance.appendChild(script);
        console.log('script', script);
    }

    render() {
        const google = {
            height: '400px'
        }
        return (
                <div className="vntd-gmap">	
                    <div id="google-map-233" style={google}></div>
                </div>

                )
    }
}

export default FooterLandingPage
