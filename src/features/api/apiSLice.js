import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { articlesAdapter } from '../articles/articlesSlice';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://hacker-news.firebaseio.com/v0'}), 
    endpoints: build => ({
        getIds: build.query({
            query: () => '/topstories.json',
            async onQueryStarted(_arg, {dispatch, queryFulfilled}){
                const {data} = await queryFulfilled;
                //TODO: Optimize for load speed. 
                //First Approach: Query smaller n ids when component mounts. Query next batch of n ids on hover over "More" button.
                Promise.all(data.map(id => dispatch(apiSlice.endpoints.getArticle.initiate(id)).then((resp => resp, err => err))));
                
                 }     
        }),
       
        getArticle: build.query({
            query: articleId => `/item/${articleId}.json`,
            transformResponse: (response) => {
                return  articlesAdapter.upsertOne(articlesAdapter.getInitialState(), response);
              },
        }),
    }),
});

export const {useGetIdsQuery, useGetArticleQuery, useGetIdsQueryState} = apiSlice;

