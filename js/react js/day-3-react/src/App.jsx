import Button from "./Button.jsx"
import ProfilePic from "./ProfilePic.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import OnChange from "./Onchange.jsx"
function App() {

  return (
    <>
      {/* Click Event */}
      <div className="bg-sky-500 h-[400 px] w-screen flex flex-col justify-center items-center gap-5 rounded-3xl m-10">
        <h1 className="text-2xl font-bold "><u>Click Event in Button And Picture</u></h1>
        <Button />
        <ProfilePic/>
      </div>

      {/* React hook and useState() */}
      <div className="bg-olive-700 h-[400 px] w-screen flex flex-col justify-center items-center gap-5 rounded-3xl m-10">
        <h1 className="text-2xl font-bold  text-white"><u>React hook and useState()</u></h1>
        <MyComponent/>
      </div>

      {/* Counter */}
      <div className="bg-fuchsia-600 h-screen w-screen flex flex-col justify-center items-center gap-5 rounded-3xl m-10">
        <h1 className="text-8xl font-bold"><u>Counter</u></h1>
        <Counter/>
      </div>

      {/* OnChange() */}
      <div className="bg-green-600 h-[400px] w-screen flex flex-col justify-center items-center gap-5 rounded-3xl m-10">
        <h1 className="text-2xl font-bold"><u>OnChange</u></h1>
        <OnChange/>
      </div>
    </>
  )
}

export default App
