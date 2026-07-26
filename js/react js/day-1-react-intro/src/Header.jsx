function Header() {
    return(
        <header className="">
            
            <nav className="bg-black text-white grid grid-cols-2 sticky top-0 p-6">
                <h1 className="text-center font-[800] font-sans">My Website</h1>
                <ul className="flex justify-evenly">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact US</a></li>        
                </ul>
            </nav>

        </header>
    );
}
export default Header