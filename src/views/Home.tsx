import React, {ReactElement} from 'react';
import Typewriter from 'typewriter-effect';

export default function Home(): ReactElement {
  return (
    <div className="container w-2/5 ml-10">
      <h1 className="text-6xl text-white font-mono">
        Hello, My name is
        <div className="font-bold text-yellow-600">
          <Typewriter
          options={{
            strings: ['Daniel Olczyk'],
            autoStart: true,
            loop: true,
          }} />
        </div>
        I&apos;m the young Fullstack
        <a
          className="text-indigo-800 font-bold tracking-wide mr-3 ml-3"
        >
          .NET
        </a>
        Developer
      </h1>
    </div>
  );
}
