import React from 'react';


class PageTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
                <div id="pagetop" className="white-pagetop">
                    <div className="pagetop_inner clearfix">
                
                        <div className="float-left texts col-lg-6">
                            <p><span className="topbar-text "></span></p>		
                        </div>
                
                        <div className="float-right socials col-lg-6">
                            <div className="topbar-section topbar-social"><div className="vntd-social-icons social-icons-classic social-icons-"><a className="social social-facebook url facebook url" href="http://your_facebook_page_url" target="_blank"><i className="fa fa-facebook url"></i></a><a className="social social-twitter twitter" href="#" target="_blank"><i className="fa fa-twitter"></i></a><a className="social social-dribbble dribbble" href="#" target="_blank"><i className="fa fa-dribbble"></i></a><a className="social social-vimeo vimeo" href="#" target="_blank"><i className="fa fa-vimeo"></i></a><a className="social social-youtube youtube" href="#" target="_blank"><i className="fa fa-youtube"></i></a></div></div>
                        </div>
                
                    </div>
                </div>

                )
    }

}
export default PageTop

