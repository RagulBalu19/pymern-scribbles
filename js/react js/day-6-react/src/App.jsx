import DigitalClock from "./DigitalClock.jsx";
import PropDrillingA from "./PropDrillingA.jsx";
import UseContextA from "./UseContextA.jsx";
import UseEffectCounter from "./UseEffectCounter.jsx";
import UseEffectWidthHeight from "./UseEffectWidthHeight.jsx";
import UseRef1 from "./UseRef1.jsx";

function App() {
  return(
    <>
      {/* UseEffect() */}
      <UseEffectCounter/>
      <UseEffectWidthHeight />
      <DigitalClock/>

      {/* prop drilling method */}
      <h1 className="font-bold text-2xl text-center"><u>PROP DRILLING METHOD</u></h1>
      <PropDrillingA/>

      {/* UseContext() */}
      <h1 className="font-bold text-2xl text-center"><u>USE CONTEXT METHOD</u></h1>
      <UseContextA/>

      {/* useRef() */}
      <UseRef1/>
    </>
  );
}

export default App;