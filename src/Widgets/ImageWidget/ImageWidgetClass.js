import * as Scrivito from 'scrivito';

const ImageWidget = Scrivito.provideWidgetClass('ImageWidget', {
  attributes: {
    width: 'string',
    height: 'string',
    image: 'reference',
    alignment: ['enum', { values: ['left', 'center', 'right'] }],
    alternativeText: 'string',
    link: 'link',
  },
});

export default ImageWidget;
