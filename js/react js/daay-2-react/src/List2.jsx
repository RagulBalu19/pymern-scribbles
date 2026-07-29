function List2(){
    const car = ["BMW","Audi","Swift","MG","Mahendira"]
    const c1 = car.map(c => <li>{c}</li>);
    return(<ul>{c1}</ul>)
}
export default List2