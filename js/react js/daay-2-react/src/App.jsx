import Student from "./Student.jsx"
import Greeting from "./Greeting.jsx"
import List from "./List.jsx"
import List2 from "./List2.jsx"
import ListObject from "./ListObject.jsx"
import FilterObj from "./FilterObj.jsx"
import ListReuseable from "./ListReuseable.jsx"
function App() {
  const fruits = [{id:1, name:"apple", calories:96},
                    {id:2, name:"orange", calories:75},
                    {id:3, name:"banana", calories:111},
                    {id:4, name:"coconut", calories:1536},
                    {id:5, name:"pineapple", calories:32},
                  ];

  const veg = [{id:1, name:"potato", calories:174},
               {id:2, name:"tomato", calories:18},
               {id:3, name:"brinjal", calories:35},
               {id:4, name:"bitterguard", calories:17},
               {id:5, name:"bottleguard", calories:15},
    ];
  return (
  <>
    <Student name="Ragul" age={23} degree = "MCA" />
    {/* <Greeting islogedin = {false} username="Ragul" /> */}
    <Greeting islogedin = {true}/>

    {/* Render list */}
    <div className="bg-red-300 h-[150px] flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-center"><u>Render List</u></h1>
      <p>normal method to print list</p>
      <List />
    </div>
    
    <hr></hr>
    {/* Render list using Map()*/}
    <div className="bg-green-300 h-fit flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-center"><u>Render List</u></h1>
      <p>Using Map() to print list</p>
      <List2 />
    </div>


<hr></hr>


    {/* Render the list of Object using Map()*/}
    <div className="bg-blue-300 h-fit flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-center"><u>Render List</u></h1>
      <p>Using Map() to print list of Objects</p>
      <ListObject />
    </div>


<hr></hr>


    {/* Filter the list of Object using filter()*/}
    <div className="bg-gray-300 h-fit flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-center"><u>Filter Object using certain Condition</u></h1>
      <p>Using filter() to print list of Objects</p>
      <FilterObj />
    </div>


<hr></hr>
    

    {/* Render the list of Object using Map()*/}
    <div className="bg-emerald-300 h-fit flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-center"><u>List Reuseable</u></h1>
      <p>Using Map() to print list of Objects Using List Reusable </p>
      <ListReuseable items = {fruits} category = "Fruits" />
      <ListReuseable items = {veg} category = "Vegetables" />
    </div>
    
  </>
  )
}

export default App
