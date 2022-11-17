import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme } from "./themeSlice";
import { BsMoonStars } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'


export default function ToggleTheme() {
    const dispatch = useDispatch();
    const darkmode = useSelector((state => state.theme.darkMode));

    const onClickHandler = (themeMode) => {

        dispatch(darkTheme({ darkMode: themeMode === 'dark', theme: themeMode }));
    }

    return (
        <div>
            {!darkmode ?
                <button className='buttonTheme' data-theme={'button-dark'} onClick={() => onClickHandler('dark')}><BsMoonStars /></button>
                : <button className='buttonTheme' data-theme={'button-light'} onClick={() => onClickHandler('light')}><BsSun /></button>}
        </div>
    )
}