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

    const [index, setIndex] = useState(0);
    const [starredIndex, setStarredIndex] = useState(0);
    const location = useMatches();
    const starredIds = useSelector(articlesSelector.selectIds);
    const isStarred = location.find(({pathname}) => pathname === '/starred');
    const savedArticles = location.pathname === '/starred';
    const displayArticles = isStarred ? starredIds?.slice(starredIndex, starredIndex + 12) : articleIds?.slice(index, index + 12);

    const onClickHandler = () => {
        if(displayArticles.length < 12) return; 
        if(savedArticles) {
            const nextPage = starredIndex + 12;
            setStarredIndex(nextPage);
        }
        const nextPage = index + 12;
        setIndex(nextPage)

    }

    return (
        <div className='container'>
            <ol className="list-groupMine">
            {displayArticles?.map((id)=> <Article key={id} savedArticles={savedArticles} id={id}/>)}
            </ol> 
            <div className='show-more'>
                <button className='showMoreButton' onClick={onClickHandler}> More </button>
            </div>
        </div>
    )
}