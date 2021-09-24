import React, {ReactElement} from 'react';
import dotnetLogo from '../../assets/logos/technologies/dotnet-logo.png';
import aspNetCoreLogo from
    '../../assets/logos/technologies/aspdotnetcore-logo.png';
import efCoreLogo from
    '../../assets/logos/technologies/efcore-logo.png';
import dockerLogo from
    '../../assets/logos/technologies/docker-logo.png';
import vueLogo from
    '../../assets/logos/technologies/vue-logo.png';
import reactLogo from
    '../../assets/logos/technologies/react-logo.png';
import './TechnologyList.sass';

export default function TechnologyList(): ReactElement {
  return (
    <div
      className=
        // eslint-disable-next-line max-len
        'technologyList grid grid-flow-row gap-11 grid-cols-3 mx-auto p-10 auto-cols-auto justify-items-center'>
      <img
        src={dotnetLogo}
        alt='dotnet'
        className='technology h-40 mx-10'/>
      <img
        src={aspNetCoreLogo}
        alt='aspnetcore'
        className='technology h-40 mx-10' />
      <img
        src={efCoreLogo}
        alt='efcore'
        className='technology h-40 mx-10' />
      <img
        src={dockerLogo}
        alt='aspnetcore'
        className='technology h-40 mx-10' />
      <img
        src={vueLogo}
        alt='vue'
        className='technology h-40 mx-10' />
      <img
        src={reactLogo}
        alt='react'
        className='technology h-40 mx-10' />
    </div>
  );
}
