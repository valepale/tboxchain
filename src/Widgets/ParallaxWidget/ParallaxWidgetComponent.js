import * as React from 'react';
import * as Scrivito from 'scrivito';
import ParallaxWidget from '../../Components/ParallaxWidget.js';


Scrivito.provideComponent('ParallaxWidget', ({ widget }) => {

  return (
          <ParallaxWidget urlImage={widget.get('urlImage')} title={widget.get('title')} text={widget.get('text')}>
          </ParallaxWidget>
 
  );
});
