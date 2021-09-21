import React, { ReactElement } from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactDescription from "../components/contact/ContactDescription";

export default function Contact(): ReactElement {
  return (
    <div className="container mx-auto content-center text-center text-white">
      <h1 className="text-5xl">Contact</h1>
      <ContactDescription />
      <ContactForm />
    </div>
  );
}
