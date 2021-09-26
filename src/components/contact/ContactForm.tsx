import React, {ReactElement, useState} from 'react';
import api from '../../api/api';

const sendMessageResult = async (
  title: string,
  email: string,
  content: string,
) => {
  const response = await api.getSendEmailResponse(title, email, content);
  if (response.status !== 200) {
    return (
      <h1>Error: {response.data.message}</h1>
    );
  }

  return (
    <h1>Message was sent, wait for reply!</h1>
  );
};

export default function ContactForm(): ReactElement {
  const [title, setTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const inputStyle =
    // eslint-disable-next-line max-len
    'w-1/2 border-2 bg-red-400 border-red-400 bg-opacity-0 mx-12 p-2 mb-5 placeholder-white placeholder-opacity-60';
  const textAreaStyle = `${inputStyle} h-64`;

  return (
    <div className="block mt-12">
      <form>
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
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button
          className="border-2 bg-red-400 p-1 text-black w-1/2 border-red-400"
          onClick={() => sendMessageResult(title, email, content)}
          type='button'
        >
          Send
        </button>
      </form>
    </div>
  );
}
