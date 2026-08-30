import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item:JSON.parse(localStorage.getItem('collections')) || []
}

const collectionSlice = createSlice({
    name:"collection",
    initialState,
    reducers: {
        addToCollection: (state, action) => {            
            const alreadyExist = state.item.find(item => item.id === action.payload.id);            
            if(!alreadyExist) {
                state.item.push(action.payload);
                localStorage.setItem('collections', JSON.stringify(state.item)); 
            }
        },
        removeFromCollection: (state, action) => {            
            state.item = state.item.filter(item => item.id !== action.payload);
            localStorage.setItem('collections', JSON.stringify(state.item));
        },
        clearCollection: (state, action) => {
            state.item = [];
            localStorage.removeItem('collections')
        }
    }
});


export const {addToCollection, removeFromCollection, clearCollection} = collectionSlice.actions;
export default collectionSlice.reducer;