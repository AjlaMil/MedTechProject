import { createSlice, configureStore } from "@reduxjs/toolkit"

const productsSlice = createSlice({

    name: "products",

    initialState: {
        values: [],
    },

    reducers: {

        setProducts: (state, action) => {
            state.values = action.payload
        }
        
    },
});

const { setProducts } = productsSlice.actions;

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    }
});

export { setProducts }