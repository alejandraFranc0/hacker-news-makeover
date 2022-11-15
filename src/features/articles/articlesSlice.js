import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
// import { apiSlice } from "../api/apiSLice";

export const articlesAdapter = createEntityAdapter({
    selectId: (article) => article?.id, 
})

export const articlesSlice = createSlice({
    name: 'articles', 
    initialState: articlesAdapter.getInitialState(), 
    reducers: {
        addSaved: articlesAdapter.addOne, 
        removeSaved: articlesAdapter.removeOne,
    }, 
    // extraReducers: (builder) => {
    //     builder.addMatcher(
    //         apiSlice.endpoints.getArticle.matchFulfilled,
    //         (state, {payload}) => {
    //             articlesAdapter.upsertOne(state, payload);
    //         }
    //     )
    // }
})

export const { addSaved, removeSaved } = articlesSlice.actions;
export const articlesSelector = articlesAdapter.getSelectors((state) => state?.articles);

export default articlesSlice.reducer