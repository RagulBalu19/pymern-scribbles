import Student from "./Student.jsx"
import Greeting from "./Greeting.jsx"
function App() {

  return (
  <>
    <Student name="Ragul" age={23} degree = "MCA" />
    {/* <Greeting islogedin = {false} username="Ragul" /> */}
    <Greeting islogedin = {true}/>
  </>
  )
}

export default App
