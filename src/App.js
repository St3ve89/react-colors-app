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
    // check if any palettes are in the localstorage
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  deletePalette(id) {
    this.setState(
      st => ({
        palettes: st.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  }

  savePalette(newPalette) {
    this.setState(
      {
        palettes: [...this.state.palettes, newPalette]
      },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    // save palette to local storage
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/new'
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
          path='/'
          render={routeProps => (
            <PaletteList
              palettes={this.state.palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          path='/palette/:paletteId/:colorId'
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
