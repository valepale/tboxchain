import React from 'react';
import * as Scrivito from 'scrivito';
import FacebookProvider, { Page }
from 'react-facebook';
import LinkedinSDK from 'react-linkedin-sdk';

class LinkedinPage extends React.Component {
    constructor(props) {
        super(props);
    }
    responseLinkedin(response) {
        console.log(response);
    }

    componentDidMount() {

        const script = document.createElement("script");
        script.src = "//platform.linkedin.com/in.js";
        script.async = true;
        this.instance.appendChild(script);
        const script2 = document.createElement("script");
        script2.type = "IN/CompanyProfile";
        script2.setAttribute('data-id', 'tboxchain');
        script2.setAttribute('data-format', 'inline');
        script2.setAttribute('data-width', '350');
        this.instance.appendChild(script2);
    }

    render() {
        return (
                <div>
                    <div ref={el => (this.instance = el)}></div>
                </div>
                )
    }

}

export default LinkedinPage