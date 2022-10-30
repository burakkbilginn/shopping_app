import React from "react";
import "./Favorites.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getGlobalState, setFavItems, useGlobalState } from "../../GlobalState/Store";

const Favorites = () => {
  // const favItems: Array<Item> = useSelector(selectFavItems)

  // const favItems: Item[] = getGlobalState("favItems")
  const [favItems] = useGlobalState("favItems")

  return (
    <div className="favItemContainer">
      <div className="favItemsHeader">FAVORITES</div>
      {favItems.map((item, key) => (
        <div key={key} className="favItemsBlock">
            <img className="favItems_itemImage" height={50} width={50} src={"https://testbackend.nc-one.com" + item?.src} alt="productimage" />
            <div className="favItems_RightBlock">
                <div className="favItems_itemName">{item?.name}</div>
                <div className="favItems_BottomContainer">
                <div className="favItems_itemPrice">{"$ "+item?.price}</div>
                <span className="favItems_favIconContainer">
                    <FavoriteIcon className="favItems_favIcon" onClick={()=> setFavItems(item)}
                    style={{ color: favItems.includes(item) ? "black" : "white", height:15, width: 15}}
                    />
                </span>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
