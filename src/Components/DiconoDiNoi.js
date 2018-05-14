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
                        <img src="https://preview-cdn.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/02878d2aef70be93/5bbd52e4256c/v/66aeca2aa20c/repubblica-logo.png?Expires=1526295075&Signature=PWWXrqfhBEDiDQsfczxOFuyJmms3WOYP00ms~ETOP8ABDrImqpBOh9VhQsjFOax1WrQVIJzK0Zz04O-xBikgCh6gdswlolNzPFtjU49B4ueCsJYlHEegN80U99Qi5ug3UtZo3NpqHSg8YFNDawpD~nQceGqMvqnKs4qpMomQAqATJ9Mgo9IV7uLuxlIabTU2ARbPX8h2x7PGtQr7ySTuOecy4UomLb2DyP10LbNA79Rim4p8khhTm7k0O8ezhJHWUq06RnX3Fey6jrLlbNdXhjt2wALrMiy8I2Qw3zozuBDPuFt1DLC3mzdWIK~KDCJ6GFtuZimwNZ-TNm7sWWO4lA__&Key-Pair-Id=APKAJT35SHFXB63YHCPQ" alt="" width="" heigth=""/>                     
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
                        <img src="https://preview-cdn.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/8c3f40efe4ede8ab/134b1dea65af/v/2297d873f25a/layout_set_logo.png?Expires=1526295436&Signature=Mp3IarPaeh8cEyd7Vh2iadivBCQH57sowRIAWxcyU6MARNY2Fjlxzxtjlo9XbP~KP41A5mx3yfDp4hGO1Ue1HnOOFhxoO2-0rmNQB4c4t-vBpukBVc~-5BMgUswpaT3U5X8J8IeWBdSolXCbNBYLjjAgQeM9wFGPzZtMJrOGdv2mNZOVmwNgs4RipBUkzV7xBVIqxxkrVQO-MUq36dXnM3FX83BjHZcpTTVcm2ASSgzjM7ZSQfM1ZVSGBw25pGHu2KViAWdfGHXUC7A8IIYB1v8an9WfZ~vLyz11Tbaf7w8I-MpXUS8jE7NihOODwBle0dGta~iiQGbQaPZamOG5cA__&Key-Pair-Id=APKAJT35SHFXB63YHCPQ" alt="" width="" heigth=""/>                     
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
                        <img src="https://preview-cdn.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/053fe00da322c6cc/24538bde322e/v/047eafbb3ff6/logo_nova.png?Expires=1526295075&Signature=Sq~cRFdyd~ppGmPEUjZqJQPFpQODjwA6Ch1TEPoWi5Ad6kbFNczz0rvpu483C6Ei1Pj4NtJc~gX0KlUR1hGk6-j3UcWTCebKdk-MwPtAziwMxUiB9z5mZ4PQddxRGsLXDDyNdc9lcLraCaJVNov9G2wx7yD2aThJw9MgH5loPHKtqAWV8w90mimDspZzaCW7dXNCj-jhE2dSv26HNfQbSeaZeZUh~88ZgABkt2Uj4Y4pZyoAbPIIoBTH92pRiE~QESVGrjVlCwEAhwcfLLUMQMx7AUrgEqhY0h3z~aMbcb65aRy2HCS1dQZNEki4d0noOfv~dsGv5PiiPwZcLzdimw__&Key-Pair-Id=APKAJT35SHFXB63YHCPQ" alt="" width="" heigth=""/>                     
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