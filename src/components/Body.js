import { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCard";
import { starFilter } from "../utils/starFilter";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);
  const filterHandler = () => {
    setFilteredArr(starFilter(restaurantsList));
  };

  const fetchData = () => {
    fetch(RES_URL)
      .then((res) => res.json())
      .then((data) => {
        setRestaurantsList(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredArr(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantsList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <div className="search">
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            type="text"
            value={searchText}
          />
          <button
            onClick={() => {
              const searchFilter = restaurantsList.filter((val) => {
                return val?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase());
              });
              setFilteredArr(searchFilter);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button id="filter-btn" onClick={filterHandler}>
          Top Restaurant Filter
        </button>
      </div>
      <div className="res-container">
        {filteredArr.map((resData) => {
          return <RestaurantCards key={resData.info.id} resData={resData} />;
        })}
      </div>
    </div>
  );
};

export default Body;
