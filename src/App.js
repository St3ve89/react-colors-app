import React from 'react';
import Palette from './components/palette/Palette';
import seedColors from './helper/seedColors';
import { generatePalette } from './helper/colorHelpers';

function App() {
  return (
    <div>
     <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
