import React, { FunctionComponent, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectFavItems, setFavItems, setShopItem } from "../../Redux/navSlice";
import "./ItemCard.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface Item {
  id: number;
  name: string;
  price: string;
  src: string;
}

export interface Props {
  item: Item;
}

const ItemCard: FunctionComponent<Props> = ({ item }) => {

  const favItems = useSelector(selectFavItems)

  // const favIconRef = useRef<SVGSVGElement>(null)
  
  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(setShopItem(item))
  }

  // let favIcon = document.querySelector<SVGSVGElement>(".favIcon")!

  const onFavClicked = () => {
    dispatch(setFavItems(item))
  }


  useEffect(()=>{
    // console.log("favItems changed.")
    // console.log("favItems -> ", favItems)
  },[favItems])

  return ( item &&
      <div style={{ width: "100%", height: "100%", padding: "1em" }}>
        
          <div className="itemCardContainer">
            {/* <div>{item?.id}</div> */}
            <Link to="/productpage" onClick={handleClick}>
            <img
              className="itemImage"
              height={100}
              width={100}
              src={"https://testbackend.nc-one.com" + item?.src}
              alt="productimage"
            />
            </Link>

            <div className="itemName">{item?.name}</div>
            <div className="itemBottomContainer">
              <div className="itemPrice">{"$ "+item?.price}</div>
              <span className="favIconContainer">
                <FavoriteIcon className="favIcon" onClick={onFavClicked}
                style={{ color: favItems.some((element: Item) => {
                  if (element?.id === item?.id) {
                    return true;
                  }                
                  return false;
                }) ? "black" : "white"}}
                />
              </span>
            </div>
          </div>
      </div>
    )
}

export default ItemCard
