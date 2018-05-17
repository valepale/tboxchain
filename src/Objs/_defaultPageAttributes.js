const defaultPageAttributes = {
  body: ['widgetlist', { only: 'SectionWidget' }],
  navigationBackgroundImage: 'reference',
  navigationBackgroundImageGradient: ['enum', { values: ['yes', 'no'] }],
  navigationHeight: ['enum', {
    values: [
      'small',
      'medium-height',
      'full-height',
    ],
  }],
  navigationSection: 'widgetlist',
  title: 'string',
  showInNavigation: ['enum', {
    values: [
      'yes',
      'no',
    ],
  }],
};

export default defaultPageAttributes;
