import * as Scrivito from 'scrivito';
import factWidgetIcon from '../../assets/images/fact_widget.svg';
Scrivito.provideEditingConfig('FaqWidget', {
  title: 'FaqWidget',
  thumbnail: `/${factWidgetIcon}`,
  description: 'A frequently asked question.',

  attributes: {
    question: {
      title: 'Question',
      description: 'State the frequently asked question',
    },

    answer: {
      title: 'Answer',
      description: 'Provide an eloquent answer',
    },
  },

  properties: ['question', 'answer'],
});