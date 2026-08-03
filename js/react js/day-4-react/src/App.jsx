import ColorPicker from './ColorPicker.jsx'
import UpdaterFunction from './UpdaterFunction.jsx';
import UpdaterFunctionInObject from './UpdaterFunctionInObject.jsx';
function App() {
  return(
    <>
    {/* Color Picker using useSate() */}
      <div className='bg-pink-500 h-screen flex flex-col justify-center items-center mr-3 ml-3 mt-3 mb-3'>
        <ColorPicker/>
      </div>

      {/* Counter using updaterFunction*/}
      <div className='bg-yellow-500 h-screen flex flex-col justify-center items-center mr-3 ml-3 mt-3 mb-3'>
        <h1 className='font-bold text-3xl'><u>UpdaterFunction</u></h1>
        <UpdaterFunction/>
      </div>

      {/* UpadterFunction In Object State */}
      <div className='bg-green-500 h-screen flex flex-col justify-center items-center mr-3 ml-3 mt-3 mb-3'>
        <h1 className='font-bold text-3xl mb-2'><u>UpdaterFunction in Object State</u></h1>
        <UpdaterFunctionInObject/>
      </div>
      
    </>
  );  
}

export default App;