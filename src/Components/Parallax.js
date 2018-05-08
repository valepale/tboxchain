import React from 'react'
import axios from 'axios';

class Parallax extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const script = document.createElement("script");
        console.log('this.props.urlImage',this.props.urlImage);
        script.innerHTML = "$('.parallax-window').parallax({imageSrc: \""+this.props.urlImage+"\"});";
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