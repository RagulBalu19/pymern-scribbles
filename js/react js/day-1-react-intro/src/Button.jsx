function Button() {
    return(
        <>
            <div className="flex flex-col justify-center items-center py-10 px-10">
                <button className="bg-red-500 rounded-xl px-3 py-2 text-white font-[800] font-mono hover:cursor-pointer hover:bg-red-200 hover:text-black">Click ME</button>
            </div>
        </>
    );
}
export default Button;