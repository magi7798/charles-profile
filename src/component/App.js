import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';

import MenuItems from './Menu';
import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Resume } from './Resume';
import { Portfolio } from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={2}>
          <MenuItems />
        </Grid.Column>

        <Grid.Column width={14}>
          <Home />
          <Divider hidden />
          <AboutMe />
          <Divider hidden />
          <Resume />
          <Divider hidden />
          <Portfolio />
          <Divider hidden />
          <Contact />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
};

export default App;
