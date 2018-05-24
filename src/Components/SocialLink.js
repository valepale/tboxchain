import React from 'react';


class SocialLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const noPadding = {
            padding: '0'
        }
        return (
                <div id="pagetop" className="white-pagetop">
                    <div className="pagetop_inner clearfix">
                
                        <div className="texts col-lg-6 col-md-12 col-xs-12 {noPadding}">
                            <div className="pull-left">
                                <p><span className="topbar-text ">©2018 All Rights Reserved.</span></p>
                            </div>
                        </div>
                
                        <div className="socials col-lg-6 col-md-12 col-sx-12 {noPadding}">
                
                            <div className="topbar-section topbar-social">
                                <div className="vntd-social-icons social-icons-classic social-icons-">
                                    <a className="social social-facebook url facebook url" href="https://www.facebook.com/tboxchain/" target="_blank">
                                        <i className="fa fa-facebook url"></i></a>
                                    <a className="social social-twitter twitter" href="https://twitter.com/tboxchain" target="_blank">
                                        <i className="fa fa-twitter"></i></a>
                                    <a className="social social-youtube youtube" href="https://www.youtube.com/watch?v=BthH3bRXz5k" target="_blank">
                                        <i className="fa fa-youtube"></i></a>                    
                                    <a className="social social-linkedin linkedin" href="https://it.linkedin.com/company/tboxchain" target="_blank">
                                        <i className="fa fa-linkedin"></i></a>
                
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>

                )
    }

}
export default SocialLink

