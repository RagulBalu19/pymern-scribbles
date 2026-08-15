import React,{useState} from "react";
function OnChange(){
    const [name, setName] = useState("Guest"); //Input tag
    const [quantity, setQuantity] = useState(1); //Input's number
    const [comments, setComments] = useState(""); // textarea Tag
    const [pay, setPay] = useState(""); //select tag
    const [ship, setShip] = useState("Delivery"); //radio tag

    // onChange() functionCall
    function nameChange(e) {
        setName(e.target.value);
    }
    function quantityChange(e) {
        setQuantity(e.target.value);
    }
    function commentsChange(e){
        setComments(e.target.value);
    }
    function payChange(e) {
        setPay(e.target.value);
    }

    function shipChange(e) {
        setShip(e.target.value);
    }
    return(
        <>
            <div>
                <input className="border" value={name} onChange={nameChange}/>
                <p>Name: {name}</p>
                <hr/>

                <input className="border mt-1" type="number" value={quantity} onChange={quantityChange}/>
                <p>Quantity: {quantity}</p>

                <textarea className="border" placeholder="Enter a Instructions or messages" value={comments} onChange={commentsChange}/>
                <p>Comments: {comments}</p>

                <select className="border" value={pay} onChange={payChange}>
                    <option value={""}>Select a Payment Method</option>
                    <option value={"Visa"}>Visa</option>
`                   <option value={"MasterCard"}>MasterCard</option>
                    <option value={"GiftCard"}>GiftCard</option>
                </select>
                <p>Name: {pay}</p>

                <label>
                    <input type="radio" value={"Pick UP"} checked = {ship === "Pick UP"} onChange={shipChange} />
                    Pick UP
                </label><br></br>
                <label>
                    <input type="radio" value={"Delivery"} checked = {ship === "Delivery"} onChange={shipChange}/>
                    Delivery
                </label>
                <p>Shipping: {ship}</p>
            </div>
        </>
    );
}
export default OnChange;