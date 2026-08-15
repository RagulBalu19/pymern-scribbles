import UpdateStateInArray from "./UpdateStateInArray.jsx";
import UpdateArrayOfObjects from "./UpdateArrayOfObjects.jsx";
import ToDo from "./ToDo.jsx";
function App() {

  return (
    <>
      <div className="flex flex-col justify-center items-center text-2xl font-bold bg-amber-400">
        {/* Update State in Array */}
        <h1><u>Update State in Array</u></h1>
        <UpdateStateInArray/>
      </div>

      {/* Update state List of Array of Objects*/}
      <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto">
              <UpdateArrayOfObjects/>  
          </div>
      </div>


      {/* ToDo Application Using React */}
      <ToDo/>
    </>
  )
}

export default App
