
import { useState } from 'react';
import { Header } from '../components';
import { ChromePicker, CirclePicker } from 'react-color'; // Import the ChromePicker component from react-color

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000'); 

  const handleChange = (newColor) => {
    setColor(newColor.hex); 
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" style={{ backgroundColor: color }}></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <div className='flex  gap-20 mt-10'>
              <div>
                <p className="text-2xl font-semibold mt-2 mb-4">Color Picker</p>

                <ChromePicker
                  color={color}
                  onChange={handleChange}
                />
              </div>
              <div>
                  <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
                  <CirclePicker
                    color={color}
                    onChange={handleChange}
                  />
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;