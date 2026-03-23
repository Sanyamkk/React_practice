import RestroCard from "./RestroCard";
import resList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
    const [List, setList] = useState(resList);

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