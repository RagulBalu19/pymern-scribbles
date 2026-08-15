function ProfilePic(){
    const imageUrl = './src/assets/profile.jpg';
    const hC = ()=> console.log("Don't Touch my face");
    const hC1 =  (e)=> e.target.style.display = "none";
    return(
        <>
            <img src={imageUrl} className="hover:cursor-pointer" onClick={hC}></img>
            <img src={imageUrl} className="hover:cursor-pointer" onClick={hC1}></img>
        </>
    ); 
}
export default ProfilePic