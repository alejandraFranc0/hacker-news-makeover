import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { articlesAdapter } from '../articles/articlesSlice';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0' }),
    endpoints: build => ({
        getTopStoriesIds: build.query({
            query: () => '/topstories.json',
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                return data
            }
        }),
        getNewStoriesIds: build.query({
            query: () => '/newstories.json',
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                return data
            }
        }),

        getArticle: build.query({
            query: articleId => `/item/${articleId}.json`,
            transformResponse: (response) => {
                return articlesAdapter.upsertOne(articlesAdapter.getInitialState(), { ...response, saved: 'save' });
            },
        }),
    }),
});

export const { useGetTopStoriesIdsQuery, useGetArticleQuery, useGetNewStoriesIdsQuery} = apiSlice;
