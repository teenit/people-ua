import React, { useEffect, useState } from "react";
import s from "./TeamSlider.module.css";

const TeamSlider = ({teamSlides}) =>{
    const[slider, setSlider] = useState({
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
        setSlider({...slider, amountOnPage: 5,  step: 20, percent: 20})
        setIsOneSlide(false)
    }

    function setOneSlide() {
        setSlider({...slider, amountOnPage: 1, step: 100, percent: 100})
        setIsOneSlide(true)
    }

    return(
        <div className={s.wrap}>
            <div className={`${s.arrows} ${s.arrow__left}`} onClick={()=>{
                let go = slider.sliderPosition + slider.step;
                if(go > 0) return;
                let slN = slider.slideNow - 1;
                if(slN % 5 == 0) setSlider({...slider, sliderPosition: go, slideNow:slN})
                else setSlider({...slider, sliderPosition: go, slideNow:slN})

            }}></div>
            <div className={s.inner}>
                <div className={`${s.slider}`} style={{
                    gridTemplateColumns: `repeat(${teamSlides.length}, ${slider.percent}%)`,
                    marginLeft: `${slider.sliderPosition}%`
                }}>
                    {
                        teamSlides.map((item, index)=>{
                            return(
                                <div className={`${s.slide} ${index == slider.slideNow || index == slider.slideNow + 4 ? s.smaller :null} ${index == slider.slideNow + 1 || index == slider.slideNow + 3 ? s.middle :null}`} key={index}>
                                    <div className={s.slide__in}>
                                        <div className={s.slide__item}>
                                            <div className={s.item__img}>
                                                <img className={s.img} src={item.imgUrl} alt={item.status}/>
                                            </div>
                                            <div className={s.item__name}>
                                                <h3 className={s.tittle}>{item.name}</h3>
                                            </div>
                                            <div className={s.item__status}>
                                                <p className={s.text}>{item.status}</p>
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
                let go = slider.sliderPosition - slider.step;
                console.log(go);
                if(go < -(teamSlides.length * slider.percent) + 100) return;
                let slN = slider.slideNow + 1;
                if(slN % 5 == 0) setSlider({...slider, sliderPosition: go, slideNow:slN})
                else setSlider({...slider, sliderPosition: go, slideNow:slN})
            }}></div>
        </div>
    )   
}
export default TeamSlider;