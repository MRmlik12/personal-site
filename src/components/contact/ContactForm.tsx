import React, {ReactElement} from 'react';

export default function ContactForm(): ReactElement {
  const inputStyle =
    // eslint-disable-next-line max-len
    'w-1/2 border-2 bg-red-400 border-red-400 bg-opacity-0 mx-12 p-2 mb-5 placeholder-white placeholder-opacity-60';
  const textAreaStyle = `${inputStyle} h-64`;

  return (
    <div className="block mt-12">
      <form
        id="message-form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input
          className={inputStyle}
          name="title"
          type="text"
          required={true}
          placeholder="Title of your message"
        />
        <br />
        <input
          className={inputStyle}
          name="email"
          type="email"
          required={true}
          placeholder="E-mail address"
        />
        <br/>
        <textarea
          className={textAreaStyle}
          name="message"
          required={true}
          placeholder="Your message content"
        />
        <br />
        <button
          className="border-2 bg-red-400 p-1 text-black w-1/2 border-red-400"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
