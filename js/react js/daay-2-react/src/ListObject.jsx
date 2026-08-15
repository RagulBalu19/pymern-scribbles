function ListObject(){
    const cars = [{id:1, Company:"BMW", speed:120},
                  {id:2, Company:"Audi", speed:220},
                  {id:3, Company:"swift", speed:100},
                  {id:4, Company:"mahendra", speed:250},
                  {id:5, Company:"MG", speed:150},
    ];
    // Sorting

    cars.sort((a,b) => a.Company.localeCompare(b.Company))  //Alphabetic
    // cars.sort((a,b) => b.Company.localeCompare(a.Company)) alphabetic reverse order

    // cars.sort((a,b)=> a.speed-b.speed) Numeric smallest to largest
    // cars.sort((a,b)=> b.speed-a.speed) Numeric largest to Smallest
    const car = cars.map(c => <li key={c.id}>{c.Company}:&nbsp;<b>{c.speed}</b></li>)
    return(<ul>{car}</ul>)
}
export default ListObject;