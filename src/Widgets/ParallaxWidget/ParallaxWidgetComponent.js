import * as React from 'react';
import * as Scrivito from 'scrivito';
import Parallax from '../../Components/Parallax.js';


Scrivito.provideComponent('ParallaxWidget', ({ widget }) => {

  return (
          <Parallax urlImage={widget.get('urlImage')}>
          <div>{widget}</div>
          </Parallax>
 
  );
});
