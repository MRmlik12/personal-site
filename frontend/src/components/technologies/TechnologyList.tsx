import React, {ReactElement} from 'react';
import dotnetLogo from '../../assets/logos/technologies/dotnet-logo.png';
import aspnetcoreLogo from
    '../../assets/logos/technologies/aspdotnetcore-logo.png';
import efcoreLogo from
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
    <div className='flex mx-auto p-10'>
      <img
        src={dotnetLogo}
        alt='dotnet'
        className='technology h-40 mx-10'/>
      <img
        src={aspnetcoreLogo}
        alt='aspnetcore'
        className='technology filter
         grayscale h-40 mx-10' />
      <img
        src={efcoreLogo}
        alt='aspnetcore'
        className='technology h-40 mx-10' />
      <img
        src={dockerLogo}
        alt='aspnetcore'
        className='technology h-40 mx-10' />
      <img src={vueLogo}
           alt='aspnetcore'
           className='technology h-40 mx-10' />
      <img
        src={reactLogo}
        alt='aspnetcore'
        className='technology h-40 mx-10' />
    </div>
  );
}
