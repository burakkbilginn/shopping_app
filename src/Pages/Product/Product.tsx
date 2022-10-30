import React, { FunctionComponent } from "react";
import Favorites from "../../Components/Favorites/Favorites";
import "./Product.css";
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ReactImageMagnify from "react-image-magnify"
import { useGlobalState } from "../../GlobalState/Store";

const Product: FunctionComponent = () => {

  const [item] = useGlobalState("shopItem")

  return (
    <div className="productPageContainer">
      <div className="favoritesContainer">
        <Favorites  />
      </div>

      <div className="productPageRightContainer">
        {/* <div>{item?.id}</div> */}

        <div className="productLeftPart">
          <ReactImageMagnify className="reactImageMagnify"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: "https://testbackend.nc-one.com" + item?.src,
                // srcSet: this.srcSet,
                // sizes: "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
                width: 10,
                height: 10
              },
              largeImage: {
                alt: "",
                src: "https://testbackend.nc-one.com" + item?.src,
                width: 1200,
                height: 1800
              },
              enlargedImageContainerDimensions: {
                width: "300%",
                height: "300%"
              },
              isHintEnabled: true,
              // enlargedImagePosition: "over",
              enlargedImageContainerClassName: "magnifiedImageContainer",
              enlargedImageClassName: "magnifiedImage",
            }} 
          />
          {/* <img
            className="itemImage"
            height={300}
            width={300}
            src={"https://testbackend.nc-one.com" + item?.src}
            alt="productimage"
          /> */}

          <ZoomInIcon />
        </div>

        <div className="productRightPart">
          <div className="productPageItemName">{item?.name}</div>
          <div className="itemPrice">$ {item?.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
