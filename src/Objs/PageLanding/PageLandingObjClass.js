import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';
import metaDataAttributes from '../_metaDataAttributes';
import defaultPageAttributes from '../_defaultPageAttributes';

const Page = Scrivito.provideObjClass('PageLanding', {
  attributes: {
    ...defaultPageAttributes,
    childOrder: 'referencelist',
    ...metaDataAttributes,
  },
});

registerTextExtract('PageLanding', [
  { attribute: 'body', type: 'widgetlist' },
]);

export default Page;
