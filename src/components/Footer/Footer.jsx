import React from "react";
import s from "./Footer.module.css"
import facebook from "../../img/icons8-facebook-50.png"
import telegram from "../../img/icons8-телеграмма-app-50.png"
import instagram from "../../img/icons8-instagram-100.png"
import logoImg from "../../img/logoFooter.png"

const Footer = ({t}) =>{
    return(
        <footer>
            <div className={s.footer__wrap}>
                <div className={s.footer__in}>
                    <img src={logoImg} alt="Логотип" />
                    <div className={s.footer__in__items}>
                        <div className={s.footer__item}>
                            <h3>{t("contacts")}</h3>
                            <a href="tel: +38 093 208 07 60">+38 (093) 208 07 60</a>
                            <a href="tel: +38 093 650 50 35">+38 (093) 650 50 35</a>
                            <a href="mailto: info@people-ua.org">info@people-ua.org</a>
                        </div>
                        <div className={s.footer__item}>
                            <div className={s.footer__item__in}>
                                <h3>{t("adress")}</h3>
                                <p>{t("adress2")}</p>
                            </div>
                            <div className={s.footer__item__in}>
                                <h3>{t("social")}</h3>
                                <div className={s.social}>
                                    <a href="#"><img src={facebook} alt="Facebook" /></a>
                                    <a href="#"><img src={telegram} alt="Telegram" /></a>
                                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                                </div>
                            </div>
                        </div>
                        <div className={s.footer__item}>
                                <h3>{t("imp links")}</h3>
                        </div>
                    </div>
                    <p className={s.copyright}>Copyright © 2022 People UA | Powered by <a href="#">IT Club studio</a></p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;