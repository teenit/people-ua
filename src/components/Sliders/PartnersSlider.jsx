import React, { useEffect, useState } from "react";
import s from "./PartnersSlider.module.css";

const PartnersSlider = ({partnersSlides}) =>{
    const[sliderPartners, setsliderPartners] = useState({
        sliderPosition: 0,
        slideNow: 0,
        step: 20,
        percent: 20,
        marginLeft: 0,
        amountOnPage: 0
    })
    
    const [isOneSlide, setIsOneSlide] = useState(false);
    useEffect(()=>{
        if(window.innerWidth < 500){
            setOneSlide()
        }
        else{
            setTwoSlides()
        }

    }, [])
    window.addEventListener("resize", (event) => {
        if(window.innerWidth < 500){
            if (!isOneSlide) {
                setOneSlide()
            }
        }
        else{
            if (isOneSlide) {
                setTwoSlides()
            }
        }
    });

    function setTwoSlides() {
        setsliderPartners({...sliderPartners, amountOnPage: 5,  step: 20, percent: 20})
        setIsOneSlide(false)
    }

    function setOneSlide() {
        setsliderPartners({...sliderPartners, amountOnPage: 1, step: 100, percent: 100})
        setIsOneSlide(true)
    }

    return(
        <div className={s.wrap}>
            <div className={`${s.arrows} ${s.arrow__left}`} onClick={()=>{
                let go = sliderPartners.sliderPosition + sliderPartners.step;
                if(go > 0) return;
                let slN = sliderPartners.slideNow - 1;
                if(slN % 5 == 0) setsliderPartners({...sliderPartners, sliderPosition: go, slideNow:slN})
                else setsliderPartners({...sliderPartners, sliderPosition: go, slideNow:slN})
            }}></div>
            <div className={s.inner}>
                <div className={s.slider} style={{
                    gridTemplateColumns: `repeat(${partnersSlides.length}, ${sliderPartners.percent}%)`,
                    marginLeft: `${sliderPartners.sliderPosition}%`
                }}>
                    {
                        partnersSlides.map((item, index)=>{
                            return(
                                <div className={s.slide} key={index}>
                                    <div className={s.slide__in}>
                                        <div className={s.slide__item}>
                                            <div className={s.item__img}>
                                                <img className={s.img} src={item.imgUrl} alt={item.status}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className={`${s.arrows} ${s.arrow__right}`} onClick={()=>{
                let go = sliderPartners.sliderPosition - sliderPartners.step;
                if(go < -(partnersSlides.length * sliderPartners.percent) + 100) return;
                let slN = sliderPartners.slideNow + 1;
                if(slN % 5 == 0) setsliderPartners({...sliderPartners, sliderPosition: go, slideNow:slN})
                else setsliderPartners({...sliderPartners, sliderPosition: go, slideNow:slN})
            }}></div>
        </div>
    )   
}
export default PartnersSlider;