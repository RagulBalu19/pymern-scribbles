import React,{useState} from 'react';

function UpdateArrayOfObjects() {
    const[cars, setCars] = useState([]);
    const[carYear, setCarYear] = useState(new Date().getFullYear());
    const[carMake, setCarMake] = useState("");
    const[carModel, setCarModel] = useState("");

    function handleAddCar() {
        const nC = {Year: carYear, Make: carMake, Model: carModel};
        setCars(c => [...c, nC]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index) {
        setCars(cars.filter((_,i) => i !== index));
    }
    function handleCarYear(e) {
        setCarYear(e.target.value)
    }
    function handleCarMake(e) {
        setCarMake(e.target.value)
    }
    function handleCarModel(e){
        setCarModel(e.target.value)
    }
    return(
        <>
            <div className='2xl:container mx-auto'>
                <div className='w-[90%] mx-auto flex flex-col justify-center items-center gap-5 text-2xl font-bold bg-green-400 h-screen w-screen'>
                    <h1 className='font-bold text-2xl text-center'><u>List Of Array Objects</u></h1>
                    <ul className='list-disc'>
                       {cars.map((car,index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.Year} {car.Make} {car.Model}
                       </li>)}
                    </ul>
                    <div className='flex flex-col gap-5'>
                        <input required className='border-2 w-sm mt-4 rounded-2xl py-2 px-3' type="number" onChange={handleCarYear} value={carYear} />
                        <input required className='border-2 w-sm mt-4 rounded-2xl py-2 px-3' type="text" onChange={handleCarMake}  placeholder='Enter a Car Make'/>
                        <input required className='border-2 w-sm mt-4 rounded-2xl py-2 px-3' type="text" onChange={handleCarModel} placeholder='Enter a Car Model'/>
                        <button className='border-2 w-sm mt-4 rounded-2xl py-2 px-3' onClick={handleAddCar}>Add Car</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpdateArrayOfObjects;