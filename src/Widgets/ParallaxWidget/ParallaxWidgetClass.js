import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const SectionWidget = Scrivito.provideWidgetClass('ParallaxWidget', {
  attributes: {
    urlImage: 'string'
  }
});



export default SectionWidget;
