import React from 'react';
import * as Scrivito from 'scrivito';
import Slider from "react-slick";

class DiconoDiNoiProva extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const textNone = {
            textDecoration: 'none',
            color: '#3d4142 !important'
        }
        const border = {
            border: "15px solid #fff",
            display: "block",
            margin: "auto"
        }
        let blogPosts = Scrivito.getClass('DiconoDiNoiPost').all().order('publishedAt', 'desc');
        console.log('blogpost', blogPosts);
        let posts = [...blogPosts];
        return (
                <Slider {...settings}>
                    {posts.map((post) => (
                                                <div style={border}>
                                                    <h3>
                                                        <a target="_blank" href={post.link}  style={textNone}>{post.title}</a>
                                                    </h3>
                                                    <p className="post-details"><i className="fa fa-clock-o"></i>{post.publishedAt} <i className="fa fa-user"></i>
                                                        <span className="colored">{post.author}</span>
                                                    </p>
                                                    <p className="post_message">
                                                    <p>{post.description}</p>
                                            
                                                    </p>
                                                    <a target="_blank" href={post.link} className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                                                </div>
                                        ))}
                
                
                </Slider>
                );
    }
}


export default DiconoDiNoiProva