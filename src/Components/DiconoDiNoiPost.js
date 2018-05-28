import React from 'react';
import * as Scrivito from 'scrivito';
import Slider from "react-slick";
import MediaQuery from 'react-responsive';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
        
        const DiconoDiNoiPost = Scrivito.connect(({}) => {

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
                var isTwo = false;
                var LEGGI = '';
                const currentPage = Scrivito.currentPage();
                const path = currentPage.path();
                var contents = [];
                posts.forEach(function (post) {
                if (post.get('lingua') === 'it' && path.includes('/lang/it')) {
                LEGGI = 'LEGGI';
                        contents.push(post);
                } else if (post.get('lingua') === 'en' && path.includes('/lang/en')) {
                LEGGI = 'READ';
                        contents.push(post);
                }
                })
                if ((contents.length) % 3 === 1) {
        isOne = true;
        } else if ((contents.length) % 3 === 2) {
        isTwo = true;
        }


        return (
<div>
    <MediaQuery minWidth={600}>
        <Slider {...settings}>
            {contents.map((post) => (
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
                {(post.get('video') !== '') ?
               
                (<Video width="100%" >
                    <source src={post.get('video')} type="video/webm" />
                    <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                </Video>)
                                : (<p></p>)}
                {(post.get('showButton') === 'yes') ?
                                (<a target="_blank" href={post.get('link')} className="post_read_more_button ex-link uppercase" style={textNone}>{LEGGI}</a>)
                                : (<p></p>)}
            </div>

                                ))}
            {isOne ? ([<div></div>, <div></div>]) : (null)}
            {isTwo ? (<div></div>) : (null)}
        </Slider>
    </MediaQuery>
    <MediaQuery maxWidth={599}>
        <Slider {...settings}>
            {contents.map((post) => (
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
                {(post.get('video') !== '') ?
                 (<Video width="100%" >
                    <source src={post.get('video')} type="video/webm" />
                    <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                </Video>)
                                : (<p></p>)}
                {(post.get('showButton') === 'yes') ?
                                (<a target="_blank" href={post.get('link')} className="post_read_more_button ex-link uppercase" style={textNone}>{LEGGI}</a>)
                                : (<p></p>)}
            </div>

                                ))}
        </Slider>
    </MediaQuery>
</div>
                                );
                        });
                                export default DiconoDiNoiPost