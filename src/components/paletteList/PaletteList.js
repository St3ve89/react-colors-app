import React, { Component } from 'react';
import MiniPalette from '../miniPalette/MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div>
        <MiniPalette />
        <h1>React colors</h1>
        {palettes.map(palette => (
          <p>
            <MiniPalette {...palette} />
          </p>
        ))}
      </div>
    )
  }
}

export default PaletteList;