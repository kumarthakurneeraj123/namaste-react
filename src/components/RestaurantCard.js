import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, costForTwo, avgRating, sla, cuisines} = resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
        <img alt="Restaurant" src={`${CDN_URL}${ cloudinaryImageId }`} />
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{sla?.deliveryTime} min</h4>
        <h4>{cuisines?.join(', ')}</h4>
      </div>
    );
  };

  export default RestaurantCards;