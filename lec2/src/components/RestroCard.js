
const RestroCard=(props)=>{
    return (
        <div className="Restro-card">
           <img 
            className="Restro-image" 
            src={props.image}
            alt="food" 
            />
            <h2>{props.resName}</h2>
            <h3>{props.cusine}</h3>
            <h4>{props.rating}</h4>
        </div>
    )
}

export default RestroCard;