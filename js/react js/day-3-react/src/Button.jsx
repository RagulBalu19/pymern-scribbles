function Button(){
    let count = 0
    const hC = (name)=>{
        if (count < 3) {
            count++;
            console.log(`${name} Niruthu`);   
        }
        else{
            console.log(`${name} pothum vitru`);
            
        }
    }
    
    return(
        <>
            <button onClick={()=>hC("Hey Man")} className="bg-amber-400 border-2 p-3 m-1 text-[2em] hover:bg-amber-950 hover:text-white">Click ME If you can</button>
        </>
    );
}
export default Button