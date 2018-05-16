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
        <div className="floatLeft">
        <div className="col-lg-4 text-center minHeight">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/1814bc74ba833d01/1c1d0f439d95/v/0adb90bf1417/5.png" alt="" width="" heigth="" />
        </div>
        <div className="col-lg-4 text-center minHeight">
        <video src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/1ef8efc52c309819/38b66ae9b0bc/tbox-animation-3.mp4#t=0.01" controls="" width="100%"></video>
        </div>
        
        
        <div className="col-lg-4 text-center minHeight">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/5589bf766c1b2a61/3d5297a79964/v/19e0ea9e9889/6.png" alt="" width="" heigth="" />
        </div>

        <div><h4 className="colorPrimary">E' un sistema di certificazione delle recensioni online strutturato su tecnologia blockchain con brevetto depositato, basato su due prove chiave: <b>Proof of location, Proof of identity</b></h4></div>
        </div>
        <div className="col-lg-3 text-center">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/c0922fc9ba35c99f/9962031408f2/v/43bb148fbad6/1.png" alt="" width="" heigth="" />
        </div>
        <div className="col-lg-3 text-center">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/42f1197041aed573/9bc3107f2a5e/v/8eaeb6ae7d43/2.png" alt="" width="" heigth="" /> 
        </div>
        <div className="col-lg-3 text-center">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/2ef0b68d050c3754/de5c01a1c581/v/39f1371cac0c/3.png" alt="" width="" heigth="" />
        </div>
        <div className="col-lg-3 text-center">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/ad4a5eb75874ed8c/8cc76d5ebd43/v/57d5b6dba723/4.png" alt="" width="" heigth="" />
        </div>


    </div>
</div>

)
}

}
export default PageLanding;