import React from 'react';
import axios from 'axios';

class PageLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
//document.getElementsByClassName("navbar-header")[0].style.display="none";
//        document.getElementsByClassName("navbar-collapse collapse")[0].remove();
//        document.getElementsByClassName("footer")[0].remove();
    }

    componentWillUnmount() {

    }

    render() {
        return (
                <div>
                    <div id="pageLanding" className="container">
                        <div>
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/03457f9c8c0c722d/ebd841784b32/v/a152fcf3ac1f/g226.png" alt="" width="100%" heigth=""/>
                        </div>
                        <div className="text-center">
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/ffa297b16476d9cf/c210fcf41430/v/fd270776979a/g114.png" alt="" width="" heigth="" />
                        </div>
                        <div ><h4 className="colorPrimary">E' un sistema di certificazione delle recensioni online strutturato su tecnologia blockchain con brevetto depositato, basato su due prove chiave: <b>Proof of location, Proof of identity</b></h4></div>
                        <div className="col-lg-3 text-center">
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/4d5f3ca69f01fc32/4621f5808266/v/172b06006114/path142.png" alt="" width="" heigth=""/>
                        </div>
                        <div className="col-lg-3 text-center">
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/4d5f3ca69f01fc32/4621f5808266/v/172b06006114/path142.png" alt="" width="" heigth=""/>
                        </div>
                        <div className="col-lg-3 text-center">
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/4d5f3ca69f01fc32/4621f5808266/v/172b06006114/path142.png" alt="" width="" heigth=""/>
                        </div>
                        <div className="col-lg-3 text-center">
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/4d5f3ca69f01fc32/4621f5808266/v/172b06006114/path142.png" alt="" width="" heigth=""/>
                        </div>
                
                
                    </div>
                </div>
                )
    }

}
export default PageLanding;