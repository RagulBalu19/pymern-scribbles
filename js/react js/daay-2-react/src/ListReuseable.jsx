
function ListReuseable(props) {
    
    const iL = props.items;
    const cat = props.category;

    // render a list from app.jsx file using props and map()
    
    const fruits = iL.map(item => <li key={item.id} className="hover:text-[hsl(0,0%,45%)] hover:cursor-pointer ">
                                          {item.name}:&nbsp;
                                          <b>{item.calories}</b> 
                                    </li>);

    return(
        <>
            <h1 className="font-bold text-[2.5em] mb-[10px] border rounded-md bg-[#02ffeec0]">{cat}</h1>
            <ol className="text-[2em] list-none text-center m-0 ]">
                {fruits}
            </ol>
        </>
    );
}

export default ListReuseable;