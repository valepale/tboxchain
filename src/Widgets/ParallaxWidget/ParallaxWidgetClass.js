import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const SectionWidget = Scrivito.provideWidgetClass('ParallaxWidget', {
  attributes: {
    urlImage: 'reference'
  }
});



export default SectionWidget;
