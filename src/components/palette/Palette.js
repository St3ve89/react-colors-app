import React, { Component } from 'react';
import ColorBox from '../colorBox/ColorBox';
import Navbar from '../navbar/Navbar';
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {level: 500}
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({level: newLevel});
  }

  render() {
    const {colors} = this.props.palette;
    const {level} = this.state;

    const colorBoxes = colors[level].map(color => <ColorBox background={color.hex} name={color.name} />)


    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>
        
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