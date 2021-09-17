import React, {ReactElement} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

function App(): ReactElement {
  return (
    <div>
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <h1>Hello</h1>
              </div>
              <div className='section'>
                <h1>World</h1>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
