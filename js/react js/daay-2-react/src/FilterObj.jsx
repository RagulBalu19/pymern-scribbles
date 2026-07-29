
function FilterObj() {
    const fruits = [{id:1, name:"apple", calories:96},
                    {id:2, name:"orange", calories:75},
                    {id:3, name:"banana", calories:111},
                    {id:4, name:"coconut", calories:1536},
                    {id:5, name:"pineapple", calories:32},
    ];

    // filter a object using certain condition

    // const lowCalfruits = fruits.filter(fruit => fruit.calories < 100 );
    const highCalfruits = fruits.filter(fruit => fruit.calories >= 100 );

    const listItems = highCalfruits.map(highCalfruit => <li key={highCalfruit.id}>{highCalfruit.name}:&nbsp;
                                            <b>{highCalfruit.calories}</b></li>);
    return(<ul>{listItems}</ul>)
}

export default FilterObj;