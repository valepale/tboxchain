import React from 'react';
import * as Scrivito from 'scrivito';
import Slider from "react-slick";

const DiconoDiNoiProva = Scrivito.connect(({}) => {

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
    };
    const border = {
        border: "15px solid #fff",
        display: "block",
        margin: "auto"
    };
    let blogPosts = Scrivito.getClass('DiconoDiNoiPost').all().order('publishedAt', 'desc');
    let posts = [...blogPosts];
    var isOne = false;
    if ((posts.length) % 3 === 1) {
        isOne = true;
    }
    return (
            <Slider {...settings}>
                {posts.map((post) => (
                                        <div style={border}>
                                            <h3>
                                                <a target="_blank" href={post.get('link')}  style={textNone}>{post.get('title')}</a>
                                            </h3>
                                            <p className="post-details"><i className="fa fa-clock-o"></i>{post.get('publishedAt')} <i className="fa fa-user"></i>
                                                <span className="colored">{post.get('author')}</span>
                                            </p>
                                            <p className="post_message">
                                            <p>{post.get('description')}</p>
                                    
                                            </p>
                                            <a target="_blank" href={post.get('link')} className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                                        </div>

                                        ))}
                {isOne ? ([<div></div>, <div></div>]) : (<div></div>)}
            </Slider>
            );

});


export default DiconoDiNoiProva