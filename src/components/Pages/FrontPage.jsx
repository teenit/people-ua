import React from "react";
import MainSlider from "../Sliders/MainSlider";
import s from "./FrontPage.module.css";
import logoBig from "../../img/simbol-logo.png"
import MainForm from "../Forms/MainForm";
import TeamSlider from "../Sliders/TeamSlider";
import imgUrl1 from "../../img/teamSllider/p_andry.jpg"
import imgUrl2 from "../../img/teamSllider/p_dima.jpg"
import imgUrl3 from "../../img/teamSllider/p_pasha.jpg"
import imgUrl4 from "../../img/teamSllider/p_lilya.jpg"
import imgUrl5 from "../../img/teamSllider/p_danya.jpg"
import PartnersSlider from "../Sliders/PartnersSlider";
import img1 from "../../img/partnersSlider/alinse.jpg";
import img2 from "../../img/partnersSlider/ssh-logo.png";
import img3 from "../../img/partnersSlider/logo-tnu.jpg";
import Social from "../Social/Social";

const partnersSlides = [
    {
        imgUrl: img1,
        link: ""
    },
    {
        imgUrl: img2,
        link: ""
    },
    {
        imgUrl: img3,
        link: ""
    }
]

const FrontPage = ({t})=>{
    const teamSlides = [
        {
            imgUrl: imgUrl1,
            name: t('our team name1'),
            status: t('our team role1')
        },
        {
            imgUrl: imgUrl2,
            name: t('our team name2'),
            status: t('our team role2')
        },
        {
            imgUrl: imgUrl3,
            name: t('our team name3'),
            status: t('our team role3')
        },
        {
            imgUrl: imgUrl4,
            name: t('our team name4'),
            status: t('our team role4')
        },
        {
            imgUrl: imgUrl5,
            name: t('our team name5'),
            status: t('our team role5')
        }
    ]
    return(
        <div className={s.body}>
            <Social />
            <div className={s.width85}>
                <MainSlider t={t}/>
            </div>
            <div className={s.width70}>
                <div className={s.section} id="directiories">
                    <div className={s.sections__wrap}>
                        <div className={s.trigger}>
                            <div className={s.triger__content}>
                                <div className={s.triger__content__text}>
                                    <h2>{t("our vision")}</h2>
                                    <p>{t("our vision2")}</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.trigger}>
                            <div className={s.triger__content}>
                                <div className={s.triger__content__text}>
                                    <h2>{t("our mission")}</h2>
                                    <p>{t("our mission2")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.triger}>
                        <div className={s.triger__content}>
                            <div className={s.triger__content__text}>
                                <h2>{t("our plans")}</h2>
                                <p>{t("our plans2")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.width70}>
                <div className={s.napriam}>
                    <h2 className={s.title}>{t("directories")}</h2>
                    <div className={s.napriam__wrap}>
                        <div className={s.napriam__in}>
                            <div className={s.napriam__back}>
                                <h3>{t("project1")}</h3>
                            </div>
                            <div className={s.napriam__text}>
                                <p>
                                    {t("project1 ex")}
                                </p>
                            </div>
                        </div>
                        <div className={s.napriam__in}>
                        <div className={s.napriam__back}>
                                <h3>{t("project2")}</h3>
                            </div>
                            <div className={s.napriam__text}>
                                <p>
                                    {t("project2 ex")}
                                </p>
                            </div>
                        </div>
                        <div className={s.napriam__in}>
                        <div className={s.napriam__back}>
                                <h3>{t("project3")}</h3>
                            </div>
                            <div className={s.napriam__text}>
                                <p>
                                    {t("project3 ex")}
                                </p>
                            </div>
                        </div>
                        <div className={s.napriam__in}>
                            <div className={s.napriam__back}>
                                <h3>{t("project4")}</h3>
                            </div>
                            <div className={s.napriam__text}>
                                <p>
                                    {t("project4 ex")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.width70}>
                <div className={s.about__us} id="aboutUs">
                    <div className={s.about__us__text}>
                        <h2>{t("about us1")}</h2>
                        <p>{t("about us2")}</p>
                    </div>
                    <div className={s.about__us__img}></div>
                </div>
            </div>
            <div className={s.width100}>
                <div className={s.slider__wrap}>
                    <h2 className={s.title}>{t("our team")}</h2>
                    <TeamSlider teamSlides = {teamSlides}/>
                </div>
            </div>
            <div className={s.width70}>
                <h2 className={s.title} id="photos">{t("our photos")}</h2>
                <div className={s.images__wrap}>
                    <div className={s.images__in}>
                        <div className={s.images__grid}>
                            <div className = {`${s.image__grid} ${s.grid__area__a}`}></div>
                            <div className = {`${s.image__grid} ${s.grid__area__b}`} ></div>
                            <div className = {`${s.image__grid} ${s.grid__area__c}`}></div>
                            <div className = {`${s.image__grid} ${s.grid__area__d}`}></div>
                            <div className = {`${s.image__grid} ${s.grid__area__f}`}></div>
                            <div className = {`${s.image__grid} ${s.grid__area__e}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.width100}>
                <div className={s.slider__wrap}>
                    <h2 className={s.title} id="partners">{t("our partners")}</h2>
                    <PartnersSlider partnersSlides = {partnersSlides}/>
                </div>
            </div>
            <div className={s.width70}>
                <h2 className={s.title}>{t("our values")}</h2>
                <div className={s.section__wrap}>
                    <div className={s.section__in}>
                        <p>{t("value1")}</p>
                        <p>{t("value2")}</p>
                        <p>{t("value3")}</p>
                        <p>{t("value4")}</p>
                        <p>{t("value5")}</p>
                    </div>
                    <div className={s.section__in__img}>
                        <img src={logoBig} alt="Логотип" />
                    </div>
                    <div className={`${s.section__in} ${s.section__in__left}`}>
                        <p>{t("value6")}</p>
                        <p>{t("value7")}</p>
                        <p>{t("value8")}</p>
                        <p>{t("value9")}</p>
                        <p>{t("value10")}</p>
                    </div>
                </div>
            </div>
            <div className={s.width100}>
                <div className={s.main__form}>
                    <MainForm t={t}/>
                </div>
            </div>
        </div>
    )
}
export default FrontPage;