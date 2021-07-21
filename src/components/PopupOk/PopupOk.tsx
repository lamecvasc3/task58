import React from "react";
import { useStyle } from './PopupOk.style'
import iconOk from '_assets/img/OK.svg'

export const PopupOk =({showPopup, setShowPopup }) => {
    const style = useStyle();

    return (
        <>
        {showPopup ? 
        (<div className={style.box}>
            <img src={iconOk} alt="Concluído" className={style.imgconc}/>
        </div>)
        : null}
        </>
    )
}