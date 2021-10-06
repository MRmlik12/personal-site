import React, {ReactElement} from 'react';
import TechnologyList from '../components/technologies/TechnologyList';
import '../components/technologies/Technologies.sass';

export default function Technologies(): ReactElement {
  return (
    <div className="technologies container mx-auto content-center text-center">
      <h1 className="text-7xl font-extrabold mb-10 p-1.5">
        Technologies What I&apos;m Use
      </h1>
      <TechnologyList />
    </div>
  );
}
