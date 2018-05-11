import React from 'react';

class FooterLandingPage extends React.Component {
    constructor(props) {
        super(props);
}



render() {
    const google = {
        height:'400px'
    }
    return (
            <div>
<div data-vc-parallax="2" className="vc_row wpb_row vc_row-fluid vc_custom_1460301959086 vc_row-has-fill vc_general vc_parallax vc_parallax-content-moving">
    <div className="bg-overlay bg-overlay-darker"></div><div className="inner"><div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                    <div className="vntd-contact-block contact-block-horizontal">	
                        <a className="box clearfix block f-left" href="tel:123456789">

                            <div className="icon">
                                <i className="fa fa-mobile"></i>
                            </div>

                            <div className="texts">

                                <span className="arrow"></span>

                                <h3>Phone</h3>

                                <p>0123 456 789 - 0123 456 788</p>
                            </div>

                        </a>
                        <a className="box clearfix block f-left" href="mailto:hello@mysite.com">

                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>

                            <div className="texts">

                                <span className="arrow"></span>

                                <h3>E-Mail</h3>

                                <p>hello@mysite.com</p>
                            </div>

                        </a>
                        <a className="box clearfix block f-left" href="">

                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                            </div>

                            <div className="texts">

                                <span className="arrow"></span>

                                <h3>Address</h3>

                                <p>Street 1352, Melbourne Australia</p>
                            </div>

                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true" className="vc_row wpb_row vc_row-fluid vc_custom_1456590124594 vc_row-no-padding">
    <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">	

                <div className="vntd-gmap">	
                    <div id="google-map-8609" style={google}></div>

                </div>
            </div>

        </div>
    </div>
</div>
<div className="vc_row-full-width"></div>
</div>

)
}
}

export default FooterLandingPage
