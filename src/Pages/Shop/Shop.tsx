import React from "react";
import { VariableSizeGrid as FixedSizeGrid } from "react-window";
import ItemCard from "../../Components/Item/ItemCard";
import AutoSizer from "react-virtualized-auto-sizer";
import "./Shop.css";
import FetchApi from "../API/Api";
import Favorites from "../../Components/Favorites/Favorites";
import { selectApiItems, } from "../../Redux/navSlice";
import { useSelector } from "react-redux";

const columnCount = 4;
const rowHeight = 250;

const gridRef: React.LegacyRef<FixedSizeGrid<any>> = React.createRef();
const onResize = () => {
  if (gridRef.current != null) {
    gridRef.current.resetAfterColumnIndex(0);
  }
}

const Shop = () => {

  // const { items } = FetchApi()
  FetchApi();
  const items  = useSelector(selectApiItems)

  if (!items) {
    return null;
  }

  // const ids = Array.from({ length: 50 }).map((_, i) => [i, i]);

  return ( 
    <div className="homeMainContainer">
      <div className="homeLeftContainer">
        <Favorites />
      </div>

      <div className="homeRightContainer">
        <div className="headerOfHomeRightContainer"
          style={{
            padding: "1em",
            backgroundColor: "papayawhip",
            display: "block",
          }}
        >
          Product List Page
        </div>
        <div className="itemsGrid" style={{ display: "flex", flexGrow: 1 }}>
          <AutoSizer onResize={onResize}>
            {({ width, height }) => (
              <FixedSizeGrid
                ref={gridRef}
                height={height}
                rowCount={Math.ceil(items.length / columnCount)}
                rowHeight={() => rowHeight}
                width={width}
                columnCount={columnCount}
                columnWidth={() => width / columnCount - 5}
              >
                {({ rowIndex, columnIndex, style }) => {
                  const item = items[rowIndex * columnCount + columnIndex];

                  return ( items &&
                    <div style={style}>
                      <ItemCard key={item?.id} item={item} />
                    </div>
                  );
                }}
              </FixedSizeGrid>
            )}
          </AutoSizer>
        </div>
      </div>
    </div>
  );
};

export default Shop;
