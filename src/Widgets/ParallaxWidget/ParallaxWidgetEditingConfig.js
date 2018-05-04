import * as Scrivito from 'scrivito';
import sectionWidgetIcon from '../../assets/images/section_widget.svg';

Scrivito.provideEditingConfig('ParallaxWidget', {
  title: 'Parallax',
  thumbnail: `/${sectionWidgetIcon}`,
  attributes: {
    urlImage: {
    }
  },
  properties: [
    'urlImage'
  ]

});
