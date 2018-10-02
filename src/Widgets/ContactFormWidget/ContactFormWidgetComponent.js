import * as React from 'react';
import * as Scrivito from 'scrivito';
import './contactForm.html';
/* This html file is needed for Netlify form handling. Updates to inputs in this file should also be
added to contactForm.html as well. See the following link for details:
https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/

Scrivito.provideComponent('ContactFormWidget', ({ widget }) => {
  const classNames = ['row'];
  if (widget.get('backgroundColor') === 'transparent') {
    classNames.push('panel-white-transparent');
  } else {
    classNames.push('floating-label', 'panel', 'contact-panel-padding');
  }

  return (
    <div className={ classNames.join(' ') }>
    <h3>Resta Aggiornato</h3>
    <p>Iscriviti alla mailing list per ricevere le novità e gli aggiornamenti di TBoxChain.</p>
      <form method="post" action="/pages/success/success_ita.html">
        <input
          type="hidden"
          name="form-name"
          value="contact"
        />
        <div className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </div>
        <div className="col-sm-10 no-padding">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control input-lg"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
        </div>
        <div class="col-sm-2 btn-email">
          <button
            className="btn btn-primary btn-block"
            type="submit">
            { widget.get('buttonText') || 'OK' }
          </button>
       </div>
      </form>
    </div>
  );
});
