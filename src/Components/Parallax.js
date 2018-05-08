import React from 'react'
        import axios from 'axios';

class Parallax extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");
        console.log('this.props.urlImage', this.props.urlImage);
        script.innerHTML = "$('." + this.props.title + "').parallax({imageSrc: \"" + this.props.urlImage + "\"});";
        script.async = true;
        setTimeout(() => this.instance.appendChild(script), 2000);
    }

    render() {
        const backgroundStyle = "parallax-window " + this.props.title;
        const h2Style = {
            color: '#48829a',
            position: 'relative',
            top: '45%',
            textAlign: 'center'
        };
        return (
                <div className={backgroundStyle} ref={el => (this.instance = el)}>
                    <h2 style={h2Style} >{this.props.text}</h2>
                </div>
                )
    }

}
export default Parallax