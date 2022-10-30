import React, { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { createGlobalState, createStore } from 'react-hooks-global-state';
// import { Item } from '../Components/Item/ItemCard';

export interface Item {
  id: number;
  name: string;
  price: string;
  src: string;
}

const initialState = {
  shopItem: null as unknown as Item,
  // favItems: Array<Item>,
  favItems: [] as Item[] || null,
  apiItems: [] as Item[],
}


export const setApiItems = (s: React.SetStateAction<Item[]>) => {
    setGlobalState('apiItems', s);
  }


export const { useGlobalState, setGlobalState, getGlobalState } = createGlobalState(initialState)

export const setFavItems = (element: Item) => {
  if (getGlobalState("favItems").includes(element)) {
    const filtered = getGlobalState("favItems").filter((item: Item) => item !== element)
    setGlobalState("favItems", filtered)
    // console.log("if içinde favItems = ", getGlobalState("favItems"))
  } else {
    // dispatch(favItemsCurrent.push(element))
    let state = getGlobalState("favItems")
    setGlobalState("favItems", state.concat(element))
    // console.log("else içinde favItems = ", getGlobalState("favItems"))
  }
}

export const setShopItem = (s: React.SetStateAction<Item>) => {
  setGlobalState("shopItem", s);
}




// const store = createStore(reducer, initialState);
// const { useStoreState, dispatch } = store;
  
// const reducer = (state: { favItems: Item[]; }, action: { type: Item }) => {
//     switch (action.type) {
//       case 'setFavItems': return { ...state, favItems: state.favItems.push(action.type) }
//       default: return state;
//     }
// }
  
// export const { dispatch, useStoreState } = createStore(reducer, initialState);

// const favItemsCurrent = useStoreState("favItems")


// type Action = | { type: 'setFavItems'; favItems: Item[] }

// type State = typeof initialState;

// export const { dispatch, useStoreState } = createStore(
//   (state, action) => {
//     switch (action.type) {
//       case 'setFavItems': return {
//         ...state,
//         favItems: [...state.favItems, action.favItems],
//       }
//       default: return state;
//     }
//   },
//   initialState
// )


