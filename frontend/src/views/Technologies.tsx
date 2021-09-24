import React, {ReactElement} from 'react';
import TechnologyList from '../components/technologies/TechnologyList';

export default function Technologies(): ReactElement {
  return (
    <div className="container mx-auto content-center text-center">
      <h1 className="text-7xl font-extrabold mb-10">
        Technologies What I&apos;m Use
      </h1>
      <TechnologyList />
    </div>
  );
}
