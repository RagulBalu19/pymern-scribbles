import profilepic from "../src/assets/profile.jpg"
function Card() {
    return(
        <>
        <h1 className="text-[32px] font-semibold text-teal-200 text-center text-nowrap">CARD Components</h1>
        <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div>
            <div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div>
            <div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div>
            <div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div>
            <div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div>
            <div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div><div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div><div className="shadow-xl rounded-[10px] border flex flex-col justify-center items-center gap-5 p-[20px] m-[10px] w-[250px] ">
                <img src={profilepic} alt="Logo" className="rounded-full border w-fit h-auto"></img>
                <h2>Card Components</h2>
                <p>I Learn MERN stack Daily</p>
            </div>
        </div>
    </>
    );
}
export default Card;