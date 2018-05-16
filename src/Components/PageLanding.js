import React from 'react';
import axios from 'axios';

class PageLanding extends React.Component {
constructor(props) {
super(props);
}


componentDidMount() {
document.getElementsByClassName("navbar-header")[0].remove();
        document.getElementsByClassName("navbar-collapse collapse")[0].remove();
        document.getElementsByClassName("footer")[0].remove();
}

componentWillUnmount() {

}

render() {

return (
<div>
    <div id="pageLanding" class="container">
        <div class="col-lg-4">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/225f6a7798366fae/c16b295dad34/v/4e62bbf0312d/logo_tbox_col_50x70.png" alt="tboxchain" />
        </div>    
        <div class="col-lg-4">
            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/d1474460b43a809e/aa4c6dbe5673/v/dcabd44527af/cubo.jpg" alt="" width="" heigth="" />
        </div>          
    </div>
</div>
)
}

}
export default PageLanding;