import React, {ReactElement} from 'react';

export default function ContactForm(): ReactElement {
  const inputStyle =
    // eslint-disable-next-line max-len
    'w-8/12 border-2 bg-red-400 border-red-400 bg-opacity-0 mx-12 p-2 mb-5 placeholder-white placeholder-opacity-60';
  const textAreaStyle = `${inputStyle} h-32`;

  return (
    <div className="block mt-6">
      <form action="https://submit-form.com/cfA1CqTa">
        <input
          className={inputStyle}
          name="title"
          type="text"
          placeholder="Title of your message"
          required={true}
        />
        <br />
        <input
          className={inputStyle}
          name="email"
          type="email"
          placeholder="E-mail address"
          required={true}
        />
        <br/>
        <textarea
          className={textAreaStyle}
          name="message"
          placeholder="Your message content"
          required={true}
        />
        <br />
        <button
          className=
            "w-8/12 border-2 bg-red-400 p-1 text-black w-1/2 border-red-400"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
