import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    shopItem: null,
    favItems: [],
    apiItems: [] | null,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setShopItem: (state, action) => {
            state.shopItem = action.payload
        },
        setFavItems: (state, action) => {
            // state.favItems.push(action.payload)
            if(current(state.favItems).includes(action.payload)) {
                const filtered = current(state.favItems).filter(item => item !== action.payload)
                state.favItems = filtered
            } else {
                state.favItems.push(action.payload)
            }
        },
        setApiItems: (state, action) => {
            state.apiItems = action.payload
        },
    }
    }
)

export const { setShopItem, setFavItems, setApiItems } = navSlice.actions

// how to grab data from store - SELECTORS

export const selectShopItem = (state) => state.nav.shopItem

export const selectFavItems = (state) => state.nav.favItems

export const selectApiItems = (state) => state.nav.apiItems

export default navSlice.reducer