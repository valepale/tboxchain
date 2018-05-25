import * as Scrivito from 'scrivito';
import metaDataAttributes from '../_metaDataAttributes';

const DiconoDiNoiPost = Scrivito.provideObjClass('DiconoDiNoiPost', {
  attributes: {
    title: 'string',
    author: 'string',
    publishedAt: 'string',
    description: 'string',
    link: 'string',
    lingua: 'string',
    ...metaDataAttributes,
  },
});


export default DiconoDiNoiPost;
