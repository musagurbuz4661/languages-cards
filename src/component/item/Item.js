import React, {useState} from "react"
import "../item/Item.css"

function Item(props){
    const card= props.card;
    const [showImage,setShowImage] = useState(true);
    return(
        <div className="cards"onClick={()=>setShowImage(!showImage)}> 
        {showImage ?(
            <>
            <img src={card.img}  />
            <div className="title">
                <h2 style={{fontSize:"1rem"}}>{card.name}</h2>
            </div>
            </>
        ):(
            <ul>
                <li>{card.options[0]}</li>
                <li>{card.options[1]}</li>
                <li>{card.options[2]}</li>
            </ul>
        )}

        </div>
    );
    
}
export default Item;