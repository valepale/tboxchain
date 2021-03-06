import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('FeaturePanelWidget', ({ widget }) => {
  return (
    <div className="panel panel-theme panel-list">
      <div className="panel-icon">
        <i className={ `fa ${widget.get('icon') || 'fa-check'} fa-3x` } aria-hidden="true" />
      </div>
      <div className="panel-body">
        <Scrivito.ContentTag className="h3" tag="h3" content={ widget } attribute="headline" />
        <Scrivito.ContentTag tag="p" content={ widget } attribute="description" />
      </div>
    </div>
  );
});
