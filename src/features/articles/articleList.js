import React, { useState } from 'react';
import { useGetTopStoriesIdsQuery, useGetNewStoriesIdsQuery } from '../api/apiSLice';
import { articlesSelector } from './articlesSlice';
import { useLocation, NavLink} from 'react-router-dom';
import Article from './article';
import { useSelector } from 'react-redux';

export default function ArticleList() {
    const {
        data: topStoriesIds,
    } = useGetTopStoriesIdsQuery();

    const {
        data: newStoriesIds
    } = useGetNewStoriesIdsQuery();

    const location = useLocation();
    const articleIds  =  location.pathname === '/' ? topStoriesIds : newStoriesIds; 
    const starredIds = useSelector(articlesSelector.selectIds);

    const [articleIndex, setIndex] = useState(0);
    const [starredIndex, setStarredIndex] = useState(0);

   
    const isStarred = location.pathname === '/starred';
    const displayArticles = isStarred ? starredIds?.slice(starredIndex, starredIndex + 12) : articleIds?.slice(articleIndex, articleIndex + 12);
    const displayIndex = isStarred ? starredIndex : articleIndex;

    const onClickHandler = () => {
        if (displayArticles.length < 12) return;
        if (isStarred) {
            const nextPage = starredIndex + 12;
            setStarredIndex(nextPage);
        }
        const nextPage = articleIndex + 12;
        setIndex(nextPage);
    };

    return (
        <div>
            <ol style={{"counterReset": `li ${displayIndex}`}}>
                {displayArticles?.map((id) => <Article key={id} id={id} />)}
            </ol>
            <div className='show-more'>
                {
                    ((isStarred && starredIds?.length > 12) || (!isStarred && articleIds?.length > 12)) 
                    && <NavLink to='.' className='showMoreLink' onClick={onClickHandler}> show more </NavLink>
                }
            </div>
        </div>
    )
}