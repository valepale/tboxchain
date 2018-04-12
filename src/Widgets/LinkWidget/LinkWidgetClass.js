import * as Scrivito from 'scrivito';

const LinkWidget = Scrivito.provideWidgetClass('LinkWidget', {
    onlyInside: 'LinkContainerWidget',
    attributes: {
        link: 'link',
        textColor: ['enum', {values: ['primary', 'success', 'info', 'warning', 'danger']}],
        style: ['enum', {values: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}],
        alignment: ['enum', {values: ['left', 'center', 'right']}],
    },
});

export default LinkWidget;
