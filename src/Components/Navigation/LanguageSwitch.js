import * as React from 'react';
import * as Scrivito from 'scrivito';
import getHomepage from '../../utils/getHomepage';

function LanguageSwitch() {
  const homepages = [...Scrivito.getClass('Homepage').all()];
  return (
    <ul className="nav navbar-nav text-center">       
        <li>
         { homepages.map(homepage =>
          <Scrivito.LinkTag to={ homepage } className="d-inline-block text-uppercase">
            { homepage.path().substr(6, 2) }
          </Scrivito.LinkTag>
           ) }
        </li>
          
    </ul>
  );
}

export default Scrivito.connect(LanguageSwitch);