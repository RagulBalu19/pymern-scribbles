function Food() {
    const f1 = "Idly";
    const f2 = "Dosa";
    return(
        <>
        <div className="shadow-2xl h-28 w-28 rounded-2xl border m-4 flex flex-col justify-center items-center">
            <ul className="list-disc">
                <li>{f1}</li>
                <li>{f2}</li>
                <li>Pongal</li>
            </ul>
        </div>
        <hr></hr>
        </>
    );
    
}
export default Food