import * as Scrivito from 'scrivito';
import metaDataAttributes from '../_metaDataAttributes';

const DiconoDiNoiPost = Scrivito.provideObjClass('DiconoDiNoiPost', {
    attributes: {
        title: 'string',
        author: 'string',
        publishedAt: 'string',
        description: 'string',
        video: 'string',
        link: 'string',
        lingua: 'string',
        showButton: ['enum', {
                values: [
                    'yes',
                    'no',
                ],
            }],
        ...metaDataAttributes,
    },
});


export default DiconoDiNoiPost;
