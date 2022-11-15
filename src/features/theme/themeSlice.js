import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode : false,
    getTheme : 'black'
}; 

export const themeSlice = createSlice({
    name: 'theme', 
    initialState, 
    reducers:{
        darkTheme(state, {payload}){
            state.darkMode = payload.darkMode
            state.getTheme = payload.theme
        } ,
    }

});

export const {darkTheme} = themeSlice.actions; 
export default themeSlice.reducer;