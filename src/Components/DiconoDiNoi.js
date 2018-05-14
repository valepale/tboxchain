import React from 'react';
import * as Scrivito from 'scrivito';
import Slider from "react-slick";

class DiconoDiNoi extends React.Component {
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
        return (
                <Slider {...settings}>
                    <div style={border}>
                        <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                        <h3>                   
                            <a target="_blank" href="http://napoli.repubblica.it/cronaca/2018/05/11/news/potenza_addio_alle_recensioni_fasulle_online-196092323/?refresh_ce" style={textNone}>Potenza, addio alle recensioni fasulle online</a>
                        </h3>
                        <p className="post-details">
                            <i className="fa fa-clock-o"></i>
                            11 Maggio 2018					<i className="fa fa-user"></i>
                            <span className="colored"> Anna Martino</span>
                        </p>
                        <p className="post_message">
                        <p>Validare le recensioni turistiche on line attraverso il protocollo blockchain, il database in cui sono registrate tutte le transazioni fatte in Bitcoin, la moneta “virtuale” che permette di operare senza l’intermediazione delle banche. La metodologia individuata è quella della TboxChain...
                        </p>
                        </p>
                        <a target="_blank" href="http://napoli.repubblica.it/cronaca/2018/05/11/news/potenza_addio_alle_recensioni_fasulle_online-196092323/?refresh_ce" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                    </div>
                    <div style={border}>
                        <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                        <h3>                   
                            <a target="_blank" href="http://www.factorympresa.invitalia.it/news/-/blogs/factorympresa-turismo-selezionate-le-20-migliori-startup-che-parteciperanno-all-accelerathon-di-napoli?_33_redirect=http%3A%2F%2Fwww.factorympresa.invitalia.it%2Fnews%3Fp_p_id%3D33%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_33_struts_action%3D%252Fblogs%252Fview" style={textNone}>Factorympresa Turismo: selezionate le 20 migliori startup che parteciperanno all’Accelerathon di Napoli</a>
                        </h3>
                        <p className="post-details">
                            <i className="fa fa-clock-o"></i>
                            10 Maggio 2018				<i className="fa fa-user"></i>
                            <span className="colored">Factory Impresa</span>
                        </p>
                        <p className="post_message">
                        <p>Grande successo della call di FactorYmpresa Turismo, il programma promosso dal Ministero dei Beni Culturali e gestito da Invitalia che offre servizi di tutoraggio e contributi economici...
                        </p>
                        </p>
                        <a target="_blank" href="http://www.factorympresa.invitalia.it/news/-/blogs/factorympresa-turismo-selezionate-le-20-migliori-startup-che-parteciperanno-all-accelerathon-di-napoli?_33_redirect=http%3A%2F%2Fwww.factorympresa.invitalia.it%2Fnews%3Fp_p_id%3D33%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26p_p_col_id%3Dcolumn-1%26p_p_col_count%3D1%26_33_struts_action%3D%252Fblogs%252Fview" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                    </div>
                    <div style={border}>
                        <img src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/eb77d80f7df06376/2ca85e579793/v/72805777b91d/5.jpg" alt="" width="" heigth=""/>                     
                        <h3>                   
                            <a  target="_blank" href="http://vincenzomoretti.nova100.ilsole24ore.com/2018/05/01/i-sogni-di-michele-storie-di-silicio-di-stringhe-di-codice-e-di-sonno-perduto/" style={textNone}>I sogni di Michele. Storie di silicio, di stringhe di codice e di sonno perduto </a>
                        </h3>
                        <p className="post-details">
                            <i className="fa fa-clock-o"></i>
                            1 Maggio 2018					<i className="fa fa-user"></i>
                            <span className="colored"> Vincenzo Moretti</span>
                        </p>
                        <p className="post_message">
                        <p>Caro Diario, Michele Cignarale l’ho conosciuto un settembre di due anni fa, a Potenza, nel corso di una bella festa realizzata ogni anno dalla Cgil Basilicata. Lo arruolo abbastanza presto nel dipartimento sognatori...
                        </p>
                        </p>
                        <a target="_blank" href="http://vincenzomoretti.nova100.ilsole24ore.com/2018/05/01/i-sogni-di-michele-storie-di-silicio-di-stringhe-di-codice-e-di-sonno-perduto/" className="post_read_more_button ex-link uppercase" style={textNone}>LEGGI</a>
                    </div>
                
                </Slider>
                )


    }
}


export default DiconoDiNoi