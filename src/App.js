import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/palette/Palette';
import seedColors from './helper/seedColors';
import { generatePalette } from './helper/colorHelpers';

class App extends Component {

  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => ( 
            <Palette
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )} 
        />
      </Switch>
      // <div>
      //  <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
