import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavItems, setFavItems } from "../../Redux/navSlice";
import { Item } from "../Item/ItemCard";
import "./Favorites.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Favorites = () => {
  const favItems: Array<Item> = useSelector(selectFavItems)

  const dispatch = useDispatch()

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
                    <FavoriteIcon className="favItems_favIcon" onClick={()=>dispatch(setFavItems(item))}
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
