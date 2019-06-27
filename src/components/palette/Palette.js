import React, { Component } from 'react';
import ColorBox from '../colorBox/ColorBox';
import "./Palette.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => <ColorBox background={color.color} name={color.name} />)


    return (
      <div className="palette">
        {/* navbar comes here */}
        <div className="palette-colors">
          {colorBoxes}
        </div>
        {/* footer comes here */}
      </div>
    )
  }
}

export default Palette;