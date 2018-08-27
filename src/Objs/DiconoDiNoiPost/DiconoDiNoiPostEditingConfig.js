import * as Scrivito from 'scrivito';
import blogPostObjIcon from '../../assets/images/blog_post_obj.svg';
import SectionWidget from '../../Widgets/SectionWidget/SectionWidgetClass';
import {
  metaDataEditingConfigAttributes,
  metaDataInitialContent,
  metaDataPropertiesGroup,
  socialCardsPropertiesGroup,
} from '../_metaDataEditingConfig';

Scrivito.provideEditingConfig('DiconoDiNoiPost', {
  title: 'Dicono Di Noi Post',
  thumbnail: `/${blogPostObjIcon}`,
  attributes: {
    ...metaDataEditingConfigAttributes,
    logo: {
        title: 'Link immagine',
    },
    title : {
        title: 'Title',
    },
    author: {
      title: 'Author',
    },
    publishedAt: {
      title: 'Published at',
      description: 'When will this dicono di noi post be published?',
    },
    description: {
      title: 'Description',
      description: 'Breve descrizione...',
    },
    video: {
        title: 'Link video',
        description: 'Video',
    },
    link: {
      title: 'Link della pagina esterna',
    },
    lingua : {
       title: 'Lingua'
    }
    
  },
  properties: [
    'logo',
    'title',
    'author',
    'publishedAt',
    'description',
    'video',
    'link',
    'lingua',
    'showButton'
  ],
  propertiesGroups: [socialCardsPropertiesGroup, metaDataPropertiesGroup],
  initialContent: {
    ...metaDataInitialContent,
    publishedAt: () => new Date(),
    showButton: 'yes'
  },
});
