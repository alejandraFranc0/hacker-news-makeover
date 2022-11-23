import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const articlesAdapter = createEntityAdapter({
    selectId: (article) => {
        return article?.id
    },
})

export const articlesSlice = createSlice({
    name: 'articles',
    initialState: JSON.parse(localStorage.getItem('state'))?.articles ?? articlesAdapter.getInitialState(),
    reducers: {
        addSaved(state, { payload }) {
            articlesAdapter.upsertOne(state, { ...payload, saved: 'saved' });
        },
        removeSaved: articlesAdapter.removeOne,
    },
})

export const { addSaved, removeSaved } = articlesSlice.actions;
export const articlesSelector = articlesAdapter.getSelectors((state) => state?.articles);

export default articlesSlice.reducer