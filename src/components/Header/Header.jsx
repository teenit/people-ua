import React, { useEffect, useState } from "react";
import s from "./Header.module.css";
import Language from "./Language/Language";
import logo from "../../img/headerImg/logo.png"
import Burger from "./Burger/Burger";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Payment from "../Payment/Payment";

const Header = ({ t }) => {
    const [scroll, setScroll] = useState(0)
    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    const payment = [
        {
            name: "name of beneficiary",
            value:"ГО ЛЮДИ ЮЕЙ"
        },
        {
            name: "recipients code",
            value:"44814017"
        },
        {
            name: "payees account",
            value:"UA323052990000026006030125781"
        },
        {
            name: "purpose of payment",
            value:"Безповоротна грошова допомога"
        },
        {
            name: "bank name",
            value:"АТ КБ ПРИВАТБАНК"
        }
    ]
    const [activeMenu, setActiveMenu] = useState(false)
    const [donate, setDonate] = useState(false)
    let social = document.getElementById('socialWrap')
    return (
        <header>
            <div className={scroll > 140 ? `${s.header} ${s.float}` : s.header}>
                <div className={s.header__wrap}>
                    <div className={s.header__logo}>
                        <img src={logo} alt="Логотип ГО ЛЮДИ ЮЕЙ" />
                    </div>
                    <div className={s.header__in}>
                        {scroll > 210 ?
                            <button className={s.header__button} onClick={() => {
                                setDonate(true)
                            }}>{t("baner button")}</button>
                            : null}
                        {
                            donate ? <Payment payment={payment} t={t} setClose={() => { setDonate(!donate) }} /> : null
                        }
                        <div className={s.header__language}>
                            <Language />
                        </div>
                        <div className={s.header__burger}>
                            <Burger active={activeMenu} setActive={() => { setActiveMenu(!activeMenu) }} />
                        </div>
                    </div>
                </div>
            </div>
            {activeMenu ? <BurgerMenu t={t} setActive={() => { setActiveMenu(!activeMenu) }} /> : null}
        </header>
    )
}
export default Header;