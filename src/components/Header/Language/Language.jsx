import React, {useState} from "react";
import s from "./../Header.module.css";
import i18n from "../../../i18n";


const Language = ()=>{
    const [lang, setLang] = useState('en')
    return(
        <div className={s.lang__wrap}>
           <div onClick={()=>{
                 i18n.changeLanguage('ua')
                 setLang('ua')
                 localStorage.setItem('language', 'ua')
            }} className={`${s.lang__item} ${lang === 'ua' ? s.lang__item__push : null}`}>UA</div>
            <div className={s.lang__line}></div>
            <div onClick={()=>{
                 i18n.changeLanguage('en')
                 setLang('en')
                 localStorage.setItem('language', 'en')
            }} className={`${s.lang__item} ${lang === 'en' ? s.lang__item__push : null}`}>EN</div> 
        </div>
    )
}
export default Language;