import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('LinkWidget', {
    title: 'Link List item',
    attributes: {
        link: {
            title: 'Link',
            description: "If no title is given, the obj's title or the external URl will be shown.",
        },
        textColor: {
            title: 'Text Color',
            description: 'Color of the link title text',
        },
        style: {
            title: 'Style',
            description: 'Size and font of this headline. Default: Heading 2',
            values: [
                {value: 'h1', title: 'Heading 1'},
                {value: 'h2', title: 'Heading 2'},
                {value: 'h3', title: 'Heading 3'},
                {value: 'h4', title: 'Heading 4'},
                {value: 'h5', title: 'Heading 5'},
                {value: 'h6', title: 'Heading 6'},
            ],
        },
        alignment: {
            title: 'Alignment',
            description: 'Default: Left',
            values: [
                {value: 'left', title: 'Left'},
                {value: 'center', title: 'Center'},
                {value: 'right', title: 'Right'},
            ],
        },
    },
    properties: [
        'link',
        'textColor',
        'style',
        'alignment',
    ],
});
