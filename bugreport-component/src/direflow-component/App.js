import React from 'react';
import { Styled } from 'direflow-component';
import semanticui from 'semantic-ui-css/semantic.min.css';
import { Grid, Input, Select, Button } from 'semantic-ui-react'

const App = (props) => {

  return (
    <Styled styles={semanticui}>
      <div>
        <p>
          This is a demo to show that there is a problem with <a href="https://react.semantic-ui.com/collections/grid/">semantic-ui grid</a> (max. width of 16 not possible in single row).
          The following colum-pairs (red & green) should be displayed next to each other and not on top of each other: 
        </p>

        <div>
          Using: 10 and 6
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <div style={{background:"red"}}>Ten wide Column (using Grid-tag)</div>
              </Grid.Column>

              <Grid.Column width={6}>
                <div style={{background:"green"}}>SIX wide column (using Grid-tag)</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <br></br>

        <div>
          Using: 10 and 5
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <div style={{background:"red"}}>Ten wide Column (using Grid-tag)</div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div style={{background:"green"}}>FIVE wide column (using Grid-tag)</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        
        <br></br>
        <hr></hr>
        <br></br>
        Input-element (should look like <a href="https://react.semantic-ui.com/elements/input/#variations-actions">this</a>) but appears much bigger:

        <Input
          list={[{}]}
          fluid
          type="text"
          action
          style={{ borderColor: "red" }}
        >
          <input />
          <Select
            placeholder="category"
            options={[{ key: 'one', value: 'one', text: 'one' }, { key: 'two', value: 'two', text: 'two' }]}
          />
          <Button type="button" >
            Search
          </Button>
        </Input>

        <br></br>
        <hr></hr>
        <br></br>

        <p>
          This is a demo to show problems with icons: 
        </p>

        <div className="ui label">
          <i aria-hidden="true" className="mail icon"></i>
          Test
        </div>
        
        <p>
          Besides that, the rendered label-text looks a bit different compared to to this one: 
          <a href="https://react.semantic-ui.com/elements/label/">https://react.semantic-ui.com/elements/label/</a>
        </p>
      </div>
    </Styled>
  );
};

export default App;