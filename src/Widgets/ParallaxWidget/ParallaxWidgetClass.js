import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const SectionWidget = Scrivito.provideWidgetClass('ParallaxWidget', {
  attributes: {
    urlImage: 'string',
    title: 'string',
    text: 'string'
  }
});



export default SectionWidget;
