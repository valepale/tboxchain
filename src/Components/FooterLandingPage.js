import React from 'react';
import Helmet from 'react-helmet';
import googleMap from '../utils/google_map'

        class FooterLandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.text = '\'' + googleMap +'\'';
        script.async = true;
        this.instance.appendChild(script);
        console.log('script', script);
    }

    render() {
        const google = {
            height: '400px'
        }
        return (
                <div className="vntd-gmap" ref={el => (this.instance = el)}>	
                    <div id="google-map-233" style={google}></div>
                </div>

                )
    }
}

export default FooterLandingPage
