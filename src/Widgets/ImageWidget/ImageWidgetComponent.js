import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('ImageWidget', ({ widget }) => {
    const height = widget.get('height');
    const width = widget.get('width');
    let image = <Scrivito.ImageTag
        content={ widget }
        attribute="image"
        alt={ alternativeText(widget) }
        width={width}
        heigth={height}
        />;

    const currentPage = Scrivito.currentPage();
    const path = currentPage.path();
    const link = widget.get('link');
    var tooltipText = 'Vai alla pagina ';
    
    if (path.includes('/lang/en')) {
        tooltipText = 'Go to the post ';
    }

    if (link && !Scrivito.isInPlaceEditingActive()) {
        image = <Scrivito.LinkTag to={ link } title={ tooltipText }>
            { image }
        </Scrivito.LinkTag>;
    }

    if (['center', 'right'].includes(widget.get('alignment'))) {
        return (
                <div className={ `text-${widget.get('alignment')}` }>
                    { image }
                </div>
                );
    }

    return image;
});

function alternativeText(widget) {
    const widgetAlternativeText = widget.get('alternativeText');
    if (widgetAlternativeText) {
        return widgetAlternativeText;
    }

    const image = widget.get('image');
    if (image) {
        return image.get('alternativeText');
    }

    return '';
}
