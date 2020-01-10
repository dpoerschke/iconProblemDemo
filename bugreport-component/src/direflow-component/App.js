import React from 'react';
import { Styled } from 'direflow-component';
import semanticui from 'semantic-ui-css/semantic.min.css';

const App = (props) => {

  return (
    <Styled styles={semanticui}>
      <div>
        <p>
          This is a demo to show the icon-problem: 
          <div className="ui label">
            <i aria-hidden="true" className="mail icon"></i>
            Test
          </div>
        </p>
        <p>
          Besides that, the rendered label-text looks a bit different compared to to this one:
          <a href="https://react.semantic-ui.com/elements/label/">https://react.semantic-ui.com/elements/label/</a>
        </p>
      </div>
    </Styled>
  );
};

export default App;