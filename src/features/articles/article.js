import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSaved, removeSaved, articlesSelector } from "./articlesSlice";
import { useGetArticleQuery } from "../api/apiSLice";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { BsStar, BsStarFill } from 'react-icons/bs'
import moment from 'moment'

export default function Article({ id }) {
    const { data } = useGetArticleQuery(id ?? skipToken);
    const { url, title, score, kids, time, by } = data?.entities[id] ?? {};
    const domain = url ? new URL(url) : undefined;
    const relativeTime = moment.unix(time).utc().fromNow();
    const dispatch = useDispatch();
    const selectEntities = useSelector(articlesSelector.selectEntities);
    const isSaved = selectEntities[id]?.saved === 'saved' ? 'saved' : 'save';
    const onClickHandler = () => {
        if (selectEntities[id]) {
            return dispatch(removeSaved(id));
        }
        dispatch(addSaved(data?.entities[id]));
    };

    return (
        <li>
            <div>
                <a href={url} className='url' rel="noopener noreferrer">
                    {title + ' '}
                    <span>{` (${domain?.host.replace('www.', '') ?? ''})`}</span>
                </a>
            </div>
            <div className="subtext">
                <p>
                    {`${score} points by ${by} ${relativeTime} | ${kids?.length ?? 0} comments | `}
                    {isSaved === 'saved' ? <BsStarFill style={{ 'color': 'orange', 'cursor': 'pointer' }} onClick={onClickHandler} /> : <BsStar style={{'cursor': 'pointer'}} onClick={onClickHandler} />}
                    {' ' + isSaved}
                </p>
            </div>
        </li>
    )
}