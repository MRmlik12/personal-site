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

export default function TechnologyList(): ReactElement {
  return (
    <div className='flex content-center mx-auto p-10'>
      <img src={dotnetLogo} alt='dotnet' className='mx-10' />
      <img src={aspnetcoreLogo} alt='aspnetcore' className='mx-10' />
      <img src={efcoreLogo} alt='aspnetcore' className='mx-10' />
      <img src={dockerLogo} alt='aspnetcore' className='mx-10' />
      <img src={vueLogo} alt='aspnetcore' className='mx-10' />
      <img src={reactLogo} alt='aspnetcore' className='mx-10' />
    </div>
  );
}
