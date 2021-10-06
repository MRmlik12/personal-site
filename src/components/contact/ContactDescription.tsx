import React, {ReactElement} from 'react';
import './Contact.sass';

export default function ContactDescription(): ReactElement {
  return (
    <div className="p-6">
      <section className='contact text-xl'>
        If you want to contact me, please fill the bottom e-mail form and click
        send button
      </section>
    </div>
  );
}
