import React from 'react'
import axios from 'axios';
import Responsive from 'react-responsive-decorator';

class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        };
    }

    componentDidMount() {
        this.props.media({minWidth: 768}, () => {
            this.setState({
                isMobile: false
            });
        });
        this.props.media({maxWidth: 768}, () => {
            this.setState({
                isMobile: true
            });
        });
        const script = document.createElement("script");
        console.log('this.props.urlImage', this.props.urlImage);
        script.innerHTML = "$('." + this.props.title + "').parallax({imageSrc: \"" + this.props.urlImage + "\"});";
        script.async = true;
        this.interval = setTimeout(() => this.instance.appendChild(script), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const backgroundStyle = "parallax-window " + this.props.title;
        const h2MobileStyle = {
            backgroundColor: '#48829a',
            color: 'white'
        };
        const h2Style = {
            color: '#48829a',
            position: 'relative',
            top: '45%',
            textAlign: 'center'
        };
        const {isMobile} = this.state;
        return (
                <div>
                    {isMobile ?
                                 <h3 className="h3 text-center no-margin border-bottom" style={h2MobileStyle}>{this.props.text}</h3>
                                : <div>
                                    <div className={backgroundStyle} ref={el => (this.instance = el)}>
                                        <h2 style={h2Style} >{this.props.text}</h2>
                                    </div>
                                </div>
                    }
                </div>
                )
    }

}
export default Responsive(Parallax);