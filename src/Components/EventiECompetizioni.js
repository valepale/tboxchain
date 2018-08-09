import React from 'react';
import * as Scrivito from 'scrivito';
import LinkedinSDK from 'react-linkedin-sdk';

class Loghi extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div>
                    <section id="loghi" className="bg-greydark">
                        <div className="container text-center">
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <a href="https://www.buytourismonline.com/" target="_blank"><img className="no-margin" src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/64d327e11c811088/aa260d774223/v/e152c47f68d4/loghi_bianchi4_mod.png" alt="" width="" heigth="" /></a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <a href="https://www.creativebusinesscupitalia.it/" target="_blank">  <img className="no-margin" src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/222a02eb3499d1fa/065afd759a19/v/726586e721fa/loghi_bianchi6_mod.png" alt="" width="" heigth="" /></a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-xs-6">
                                <a href="http://www.factorympresa.invitalia.it/" target="_blank"> <img className="no-margin" src="https://cdn0.scrvt.com/55526e734dfec79f05b2ccc7bbe2c4f4/82b10f6e840a2ea7/ab2481669e34/v/e9480dae676a/loghi_bianchi7_mod.png" alt="" width="" heigth="" /></a>
                            </div>
                          
                        </div>
                
                
                    </section>
                </div>
                )

    }

}

export default Loghi