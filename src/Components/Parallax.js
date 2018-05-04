import React from 'react'
import axios from 'axios';

class Parallax extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.innerHTML = "$('.parallax-window').parallax({imageSrc: 'https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/a336fcec1e07cc8b/a642bf0739da/v/3a4b12a004e0/11orizzontale.jpg'});";
        script.async = true;
        setTimeout(()=> this.instance.appendChild(script), 1000);
    }

    render() {
        return (
                <div className="parallax-window" ref={el => (this.instance = el)}></div>
                )
    }

}
export default Parallax