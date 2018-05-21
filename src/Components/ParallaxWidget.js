import React from 'react';
import axios from 'axios';
import Responsive from 'react-responsive-decorator';
import { Parallax } from 'react-parallax';

class ParallaxWidget extends React.Component {
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
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
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
                                    <h2 className="h2 text-center no-margin border-bottom-header" style={h2MobileStyle}>{this.props.text}</h2>
                                : <div>
                                   
                                    <Parallax bgImage={this.props.urlImage} bgStyle={{background: "rgba(255, 255, 255, 0.5)"}}
                                             blur={{ min: -500 }} strength={800}>
                                        <div style={{height: 300, background: "rgba(255, 255, 255, 0.5)" }}>
                                            <h2 style={h2Style} >{this.props.text}</h2>
                                        </div>
                                    </Parallax>
                                </div>
                    }
                </div>
                        )
            }

        }
        export default Responsive(ParallaxWidget);