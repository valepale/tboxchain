import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const HeadlineWidget = Scrivito.provideWidgetClass('FooterLandingPageWidget', {
  attributes: {
   
  },
});

registerTextExtract('HeadlineWidget', [
  
]);

export default HeadlineWidget;
