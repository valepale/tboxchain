import * as React from 'react';
import * as Scrivito from 'scrivito';
import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent('LinkWidget', ({ widget }) => {
    const currentPage = Scrivito.currentPage();
    const path = currentPage.path();
    const link = widget.get('link');


    const style = widget.get('style') || 'h1';
    const classNames = [style];
    var tooltipText = 'Vai alla pagina ';

    if (widget.get('alignment')) {
        classNames.push(`text-${widget.get('alignment')}`);
    }

    if (!link) {
        return (
                <Scrivito.WidgetTag tag="li">
                    <InPlaceEditingPlaceholder>
                        Provide a link in the widget properties.
                    </InPlaceEditingPlaceholder>
                </Scrivito.WidgetTag>
                );
    }

    if (path.includes('/lang/en')) {
        tooltipText = 'Go to the page ';
    }

    return (
            <Scrivito.WidgetTag tag="li">
                <Scrivito.LinkTag to={ link } title={ tooltipText + link.obj().get("title")}>
                    <div className={ classNames.join(' ') }>
                        <LinkTitle link={ link } />
                    </div>
                </Scrivito.LinkTag>
            </Scrivito.WidgetTag>
            );
});

const LinkTitle = Scrivito.connect(({ link }) => {
    if (link.title()) {
        return link.title();
    }

    if (link.isInternal()) {
        return link.obj().get('title');
    }

    return link.url();
});
