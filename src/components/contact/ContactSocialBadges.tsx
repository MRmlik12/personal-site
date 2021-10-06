import React, {ReactElement} from 'react';
import {FaTwitter, FaGithub} from 'react-icons/fa';
import {GoRepo} from 'react-icons/go';

export default function ContactSocialBadges(): ReactElement {
  return (
    <div className="inline-flex bottom-0 mt-10 p-5">
      <FaGithub
        className="text-5xl mx-3 cursor-pointer"
        onClick={() => open('https://github.com/MRmlik12')}
      />
      <FaTwitter
        className="text-5xl mx-3 cursor-pointer"
        onClick={() => open('https://twitter.com/MRmlik12')}
      />
      <GoRepo
        className="text-5xl mx-3 cursor-pointer"
        onClick={() => open('https://github.com/MRmlik12/personal-site')}
      />
    </div>
  );
}
