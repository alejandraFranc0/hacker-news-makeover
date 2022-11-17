import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode: JSON.parse(localStorage.getItem('darkMode')),
    getTheme: localStorage.getItem('theme')
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        darkTheme(state, { payload }) {
            state.darkMode = payload.darkMode
            state.getTheme = payload.theme
            localStorage.setItem('theme', payload.theme)
            localStorage.setItem('darkMode', payload.darkMode)
        },
    }
});

export const { darkTheme } = themeSlice.actions;
export default themeSlice.reducer;