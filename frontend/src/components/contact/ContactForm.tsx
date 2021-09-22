import React, { ReactElement } from "react";

export default function ContactForm(): ReactElement {
  const inputStyle =
    "w-1/2 border-2 bg-white bg-opacity-0 mx-12 p-2 mb-5 placeholder-white placeholder-opacity-60";

  return (
    <div className="block mt-16">
      <form>
        <input
          className={inputStyle}
          type="text"
          placeholder="Title of your message"
        />
        <br />
        <input
          className={inputStyle}
          type="email"
          placeholder="E-mail address"
        />
        <br />
        <textarea className={inputStyle} placeholder="Your message content" />
        <br />
        <button className="border-2 bg-white p-1 text-black w-1/2">Send</button>
      </form>
    </div>
  );
}
