import React, {ReactElement} from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactDescription from '../components/contact/ContactDescription';
import ContactSocialBadges from '../components/contact/ContactSocialBadges';
import '../components/contact/Contact.sass';

export default function Contact(): ReactElement {
  return (
    <div className="container mx-auto content-center text-center text-white">
      <h1 className="contact text-7xl font-extrabold text-red-400">Contact</h1>
      <ContactDescription />
      <ContactForm />
      <ContactSocialBadges />
    </div>
  );
}
