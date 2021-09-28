import React, {FormEvent, ReactElement, useState} from 'react';

type FormContact = {
  formName: string,
  title: string,
  email: string,
  message: string
}

export default function ContactForm(): ReactElement {
  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const inputStyle =
    // eslint-disable-next-line max-len
    'w-1/2 border-2 bg-red-400 border-red-400 bg-opacity-0 mx-12 p-2 mb-5 placeholder-white placeholder-opacity-60';
  const textAreaStyle = `${inputStyle} h-64`;

  const encode = (data: FormContact): FormData => {
    const formData = new FormData();

    formData.append('form-name', data.formName);
    formData.append('title', data.title);
    formData.append('email', data.email);
    formData.append('message', data.message);

    return formData;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, email, message);
    await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        formName: 'contact',
        title,
        email,
        message,
      }),
    }).catch((err) => console.log(err));
  };

  return (
    <div className="block mt-12">
      <form
        id="message-form"
        onSubmit={async (e) => await handleSubmit(e)}
        method="POST"
        data-netlify="true"
      >
        <input
          className={inputStyle}
          type="text"
          placeholder="Title of your message"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          className={inputStyle}
          type="email"
          placeholder="E-mail address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <textarea
          className={textAreaStyle}
          placeholder="Your message content"
          onChange={(e) => setMessage(e.target.value)}
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
