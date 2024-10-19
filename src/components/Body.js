import { useState } from "react";
import RestaurantCards from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { starFilter } from "../utils/starFilter";

const Body = () => {
  const [filteredArr, setFilteredArr] = useState(resList);
  const filterHandler = ()=>{
    setFilteredArr(starFilter(resList));
  }
    return (
      <div className="body">
        <div className="search">
          <button id="filter-btn" onClick={filterHandler}>Top Restaurant Filter</button>
        </div>
        <div className="res-container">
          {filteredArr.map((resData)=>{
              return (<RestaurantCards key ={resData.info.id} resData = {resData} />);
          })}
        </div>
      </div>
    );
  };

export default Body;