import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const HeadlineWidget = Scrivito.provideWidgetClass('MediumWidget', {
  attributes: {
    headline: 'string'
  },
});

registerTextExtract('HeadlineWidget', [
  { attribute: 'headline', type: 'string' },
]);

export default HeadlineWidget;
