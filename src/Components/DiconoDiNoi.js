import React from 'react';
import * as Scrivito from 'scrivito';
import Slider from "react-slick";
class DiconoDiNoi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []

        }

    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false
        };
        const textNone = {
            textDecoration: 'none'
        }
        const border = {
            border: "15px solid #fff",
            display: "block",
            margin: "auto"
        }
        return (
                    <Slider {...settings}>
                        <div style={border}>
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                            <h3>                   
                                <a href="http://veented.info/crexis/red-hair/" style={textNone}>Post from Blog</a>
                            </h3>
                            <p className="post-details">
                                <i className="fa fa-clock-o"></i>
                                on 18 Mar, 2016					<i className="fa fa-user"></i>
                                Posted By <span className="colored">Michael</span>
                            </p>
                            <p className="post_message">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...
                            </p>
                            </p>
                            <a href="http://veented.info/crexis/red-hair/" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                        </div>
                        <div style={border}>
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                            <h3>                   
                                <a href="http://veented.info/crexis/red-hair/" style={textNone}>Post from Blog</a>
                            </h3>
                            <p className="post-details">
                                <i className="fa fa-clock-o"></i>
                                on 18 Mar, 2016					<i className="fa fa-user"></i>
                                Posted By <span className="colored">Michael</span>
                            </p>
                            <p className="post_message">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...
                            </p>
                            </p>
                            <a href="http://veented.info/crexis/red-hair/" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                        </div>
                        <div style={border}>
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                            <h3>                   
                                <a href="http://veented.info/crexis/red-hair/" style={textNone}>Post from Blog</a>
                            </h3>
                            <p className="post-details">
                                <i className="fa fa-clock-o"></i>
                                on 18 Mar, 2016					<i className="fa fa-user"></i>
                                Posted By <span className="colored">Michael</span>
                            </p>
                            <p className="post_message">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...
                            </p>
                            </p>
                            <a href="http://veented.info/crexis/red-hair/" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                        </div>
                        <div style={border}>
                            <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                            <h3>                   
                                <a href="http://veented.info/crexis/red-hair/" style={textNone}>Post from Blog</a>
                            </h3>
                            <p className="post-details">
                                <i className="fa fa-clock-o"></i>
                                on 18 Mar, 2016					<i className="fa fa-user"></i>
                                Posted By <span className="colored">Michael</span>
                            </p>
                            <p className="post_message">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...
                            </p>
                            </p>
                            <a href="http://veented.info/crexis/red-hair/" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                        </div>
                
                    </Slider>
                )


    }
}


export default DiconoDiNoi