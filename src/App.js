import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/palette/Palette';
import PaletteList from './components/paletteList/PaletteList';
import SingleColorPalette from './components/singleColorPalette/SingleColorPalette';
import seedColors from './helper/seedColors';
import NeWPaletteForm from './components/newPaletteForm/NewPaletteForm';
import { generatePalette } from './helper/colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette]
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NeWPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
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
