import RestroCard from "./RestroCard";
import resList from "../utils/MockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [List, setList] = useState(resList);
    useEffect(()=>{
        fetchData();
    } , []);

    const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
    
    

    if(List.length === 0) {
        return <Shimmer />
    }
    return (
        <div className="Body-container">
            <div className="Filter-container">
                <button 
                    className="Filter-btn" 
                    onClick={() => {
                        const filteredList = List.filter(
                            (res) => res.rating>4.3
                        );
                    setList(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="Restaurant-container">
                {List.map((res) => (
                    <RestroCard 
                        key={res.id} 
                        resName={res.name} 
                        cusine={res.cuisine} 
                        rating={res.rating} 
                        image={res.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;