import React ,{useState} from "react";
import './StarRate.css';

const StarRate = ()=>{

    const[rating,setRating] = useState(0);
    const[hover,setHover] = useState(null);
    
    const[totalStars,setTotalStars] = useState(5);
    
    return(
        <>
{[...Array(totalStars)].map((star,index)=>{
    const currentRating = index+1;
    return(
        <>
            <label key={index}  className="starRatelabel">
                <input 
                className="starinput"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onChange={()=>setRating(currentRating)}
                />
                <span
                    className="star"
                    style={{
                        color:
                        currentRating<=(hover|| rating)?"#ffc107":"#e4e5e9",
                        
                    }}
                
                    onMouseEnter={()=>setHover(currentRating)}
                    onMouseLeave={()=>setHover(null)}
                    
                >
                    &#9733;
                    
                </span>
            </label>
        </>
    )
  
}

)
}

<p style={{color: 'white' } }><br></br>"Your Rating":{rating}/5</p>
</> 
    )
}

export default StarRate;