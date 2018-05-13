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
               
                        <div className="texts col-lg-6 {noPadding}">
                           <div className="pull-left">
                            <p><span className="topbar-text ">©2018 ALL RIGHTS RESERVED.</span></p>
                            </div>
                        </div>
                
                        <div className="socials col-lg-6 {noPadding}">
                        <div className="pull-right">
                            <div className="topbar-section topbar-social">
                                <div className="vntd-social-icons social-icons-classic social-icons-">
                                    <a className="social social-facebook url facebook url" href="http://your_facebook_page_url" target="_blank">
                                        <i className="fa fa-facebook url"></i></a>
                                    <a className="social social-twitter twitter" href="#" target="_blank">
                                        <i className="fa fa-twitter"></i></a>
                                    <a className="social social-dribbble dribbble" href="#" target="_blank">
                                        <i className="fa fa-dribbble"></i></a>
                                    <a  className="social social-vimeo vimeo" href="#" target="_blank">
                                        <i className="fa fa-vimeo"></i></a>
                                    <a  className="social social-youtube youtube" href="#" target="_blank">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>

                )
    }

}
export default SocialLink

