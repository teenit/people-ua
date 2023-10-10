import React, {useState} from "react";
import s from "./../Header.module.css";

const Menu = ({t})=>{
    return(
        <nav className={s.nav}>
            <ul className={s.ul}>
                <li className={s.item}>
                    <a href="#directiories">{t("directions")}</a>
                </li>
                <li>
                    <a href="#aboutUs">{t("about us")}</a>
                </li>
                <li>
                    <a href="#photos">{t("photos")}</a>
                </li>
                <li>
                    <a href="#partners">{t("partners")}</a>
                </li>
            </ul>
        </nav>
    )
}
export default Menu;