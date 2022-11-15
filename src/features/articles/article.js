import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { addSaved, removeSaved, articlesSelector} from "./articlesSlice";
import { useGetArticleQuery } from "../api/apiSLice";
import { skipToken } from "@reduxjs/toolkit/dist/query";

export default function Article({savedArticles,id}){
    const { data } = useGetArticleQuery(id ?? skipToken);
    const setSave = savedArticles ? 'saved': 'save';
    const [saved, setSaved] = useState(setSave);
    const { url, title, score, kids, by } = data?.entities[id] ?? {};
    const domain =  url ? new URL(url) : undefined;
    const dispatch = useDispatch();
    const selectEntities = useSelector(articlesSelector.selectEntities); 
    const onClickHandler = () => {
        if(selectEntities[id]) {
            setSaved('save')
            return dispatch(removeSaved(id));
        }
        setSaved('saved');
        dispatch(addSaved(data?.entities[id]));
    }

    return(
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                <span>
                    <a href={url} target="_blank" rel="noopener noreferrer">{`(${domain?.host.replace('www.','') ?? ''})`}</a> 
                    </span>
                <p>
                {`${score} points by ${by}`}
                |  <Link style={{'color':'grey'}}>{`${kids?.length ?? 0} comments`}</Link>
                |  <span type='text' onClick={onClickHandler}>{saved}</span>
                </p>
        </div>
      
    )
}