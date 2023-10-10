import React, { useState } from "react";
import s from "./MainSlider.module.css";
import Payment from "../Payment/Payment";

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

const MainSlider = ({t}) =>{
    const [donate, setDonate] = useState(false)
    return(
        <div className={s.slider__wrap}>
            <div className={s.slider__inner}>
                <div className={s.slider__text}>
                    <div className={s.slider__text__inner}>
                        <h1>{t("baner tittle")}</h1>
                        <p>{t("baner text")}</p>
                    </div>
                </div>
                <div className={s.slider__img__wrap}>
                    <div className={s.slider__img}>
                        <p>{t("baner text2")}</p>
                        <button className={s.slider__but} onClick={()=>{
                            setDonate(true)
                        }}>{t("baner button")}</button>
                    </div>
                </div>
            </div>
            {
                donate ? <Payment payment={payment} t={t} setClose={()=>{setDonate(!donate)}} /> : null
            }
        </div>
    )
}
export default MainSlider;