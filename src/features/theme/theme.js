import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme } from "./themeSlice";
import Sun from "../../images/sun.svg"
import Moon from "../../images/moon.svg"


export default function ToggleTheme() {
    const dispatch = useDispatch();
    const darkmode = useSelector((state => state.theme.darkMode));

    const onClickHandler = (themeMode) => {

        dispatch(darkTheme({ darkMode: themeMode === 'dark', theme: themeMode }));
    }

    return (
        <div className='buttonTheme'>
            {!darkmode ?
                <button className='moon'  onClick={() => onClickHandler('dark')}><img src={Moon} alt="feather-icon"/></button>
                : <button className='sun' onClick={() => onClickHandler('light')}><img src={Sun} alt="feather-icon"/></button>}
        </div>
    )
}