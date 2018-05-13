import React from 'react';
        import Helmet from 'react-helmet';
        import googleMap from '../utils/google_map.js'
        class FooterLandingPage extends React.Component {
        constructor(props) {
        super(props);
                }

        componentDidMount () {
        const script = document.createElement("script");
                script.src =  "../utils/google_map.js" ;
                script.async = true;
                document.body.appendChild(script);
        }

        render() {
        const google = {
        height:'400px'
        }
        return (

    <div className="vc_row-full-width"></div>

                                )
                                }
                        }

                        export default FooterLandingPage
