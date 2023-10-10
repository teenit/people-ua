import React, { useState } from "react";
import s from "./Payment.module.css"
import cardImage from "../../img/icons8-credit-card-50.png"
import paypalImage from "../../img/icons8-paypal-logo-50.png"

const Payment = ({t, setClose, payment}) =>{
    const [icons, setIcons] = useState({
        cart: true,
        paypal: false
    })
    return(
        <div className={s.wrap}>
            <div className={s.in}>
                <div className={s.title__icon}>
                    <h2 className={s.title}>{t('your support')}<br></br>{t('wat to better')}</h2>
                    <div className={s.close__image}>
                        <svg className={s.close__btn} xmlns="http://www.w3.org/2000/svg" fill="#000000" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50" onClick={setClose}><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>
                    </div>
                </div>
                <div className={s.in__icons}>
                    <div className={s.icons}>
                        <div className={`${s.icon} ${icons.cart ? s.icon__chosen : null}`} onClick={()=>{
                            setIcons({...icons, cart: true, paypal: false})
                        }}> 
                            <img src={cardImage} alt="Credit Card" />
                        </div>
                        <div className={`${s.icon} ${icons.paypal ? s.icon__chosen : null}`} onClick={()=>{
                            setIcons({...icons, cart: false, paypal: true})
                        }}>
                            <img src={paypalImage} alt="PayPal" />
                        </div>
                    </div>
                </div>
                <div className={s.render__elems}>
                    {icons.cart ? 
                        <div className={s.cart__wrap}>
                            <div className={s.cart__in}>
                                {
                                    payment.map((item, index)=>{
                                        return(
                                            <div key={index} className={`${s.str} ${index % 2 === 0 ? s.str__bl : s.str__yel}`}> 
                                                <h3>{t(item.name)}</h3>
                                                <p>{item.value}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    : null}
                    {icons.paypal ? 
                        <div className={`${s.cart__wrap} ${s.str}`}>
                            <h3>Paypal</h3>
                            
                        </div>
                    : null}
                </div>
            </div>
        </div>
    )
}
export default Payment