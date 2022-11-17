import React, { useState } from 'react';
import { useGetIdsQuery } from '../api/apiSLice';
import { articlesSelector } from './articlesSlice';
import { useMatches } from 'react-router-dom';
import Article from './article';
import { useSelector } from 'react-redux';

export default function ArticleList() {
    const {
        data: articleIds,
    } = useGetIdsQuery();

    const [articleIndex, setIndex] = useState(0);
    const [starredIndex, setStarredIndex] = useState(0);
    const location = useMatches();
    const starredIds = useSelector(articlesSelector.selectIds);
    const isStarred = location.find(({ pathname }) => pathname === '/starred')?.pathname === '/starred';
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
            <ol className="list-group">
                {displayArticles?.map((id, index) => <Article key={id} index={index + displayIndex + 1} id={id} />)}
            </ol>
            <div className='show-more'>
                {(isStarred && starredIds?.length > 12) && <button className='showMoreButton' onClick={onClickHandler}> show more </button>}
                {(!isStarred && articleIds?.length > 12) && <button className='showMoreButton' onClick={onClickHandler}> show more </button>}
            </div>
        </div>
    )
}