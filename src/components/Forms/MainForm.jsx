import React, { useState } from "react";
import s from "./MainForm.module.css"
import { apiResponce } from "../functions/api";


const MainForm = ({t}) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [idea, setIdea] = useState('')
    const [nameWrote, setNameWrote] = useState(false)
    const [phoneWrote, setPhoneWrote] = useState(false)
    const [ideaWrote, setIdeaWrote] = useState(false)
    const [nameError, setNameError] = useState('Недостатньо символів')
    const [phoneError, setPhoneError] = useState('Недостатньо символів')
    const [ideaError, setIdeaError] = useState('Недостатньо символів')
    const [checkbox, setCheckbox] = useState(false)
    const lang = localStorage.getItem('language')


    function sendForm(event){
        event.preventDefault();
        /*apiResponce([
            {   
                name: name,
                phone: phone,
                idea: idea
            }   
        ], "").then((responce)=>{alert(responce)})*/
        console.log({
            name: name,
            phone: phone,
            idea: idea
        });
    }

    const nameHandler = (e) =>{
        setName(e.target.value)
        const naEng = /^[a-zA-Z ]+$/
        const naUa = /[А-Я][а-яєі]+/g
        if(lang == 'ua'){
            if(!naUa.test(String(e.target.value))){
                setNameError('Некоректно написано')
            }else{
                setNameError('')
            }
        }else{
            if(!naEng.test(String(e.target.value))){
                setNameError('Некоректно написано')
            }else{
                setNameError('')
            } 
        }
        
    }

    const phoneHandler = (e) =>{
        setPhone(e.target.value)
        const ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if(!ph.test(String(e.target.value).toLowerCase())){
            setPhoneError('Некоректно написано')
        }else{
            setPhoneError('')
        }
    }

    const ideaHandler = (e) =>{
        setIdea(e.target.value)
        const naEng = /^[a-zA-Z ]+$/
        const naUa = /[А-Я][а-яєі]+/g
        if(lang == 'ua'){
            if(!naUa.test(String(e.target.value))){
                setIdeaError('Некоректно написано')
            }else{
                setIdeaError('')
            }
        }else{
            if(!naEng.test(String(e.target.value))){
                setIdeaError('Некоректно написано')
            }else{
                setIdeaError('')
            } 
        }
    }

    const blurHandler = (event) =>{
        switch (event.target.name){
            case 'name':
                setNameWrote(true)
                break
            case 'phone':
                setPhoneWrote(true)
                break
            case 'idea':
                setIdeaWrote(true)
                break
        }
    }

    return(
        <div className={s.form__wrap}>
            <form onSubmit={sendForm}>
                <h2 className={s.title}>{t("write us")}</h2>
                <div className={s.form__in}>
                    <div className={s.form__line}>

                        <div className={s.form__line__name}>
                            <label htmlFor="">{t("name")}</label>
                            <div className={s.input__div}>
                                {(nameWrote && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                                <input defaultValue={name} onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)} type="text" name="name" id="" required />
                            </div>
                        </div>

                        <div className={s.form__line__phone}>
                            <label htmlFor="">{t("phone")}</label>
                            <div className={s.input__div}>
                                {(phoneWrote && phoneError) && <div style={{color: 'red'}}>{phoneError}</div>}
                                <input defaultValue={phone} onChange={e => phoneHandler(e)} onBlur={e => blurHandler(e)} type="tel" name="phone" id="" required />
                            </div>
                        </div>

                    </div>

                    <div className={`${s.form__line} ${s.form__line__one}`}>
                       <div className={s.form__line__mes}>
                            <label htmlFor="">{t("message")}</label>
                            <div className={s.textarea__div}>
                                {(ideaWrote && ideaError) && <div style={{color: 'red'}}>{ideaError}</div>}
                                <textarea defaultValue={idea} onChange={e => ideaHandler(e)} onBlur={e => blurHandler(e)} cols="30" rows="5" name="idea" required ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={s.checkbox}>
                        <input required checked={checkbox} type="checkbox" name="" id="" onChange={e => setCheckbox(e.target.checked)}/>
                        <label htmlFor="">
                            <p onClick={()=>{
                                setCheckbox(!checkbox)
                            }}>{t("i agree")}</p>
                            <a href="#"> {t("politic of")}</a>
                        </label>
                    </div>
                    <button className={s.form__but}>{t("send")}</button> 
            </form>                   
        </div>
    )
}
export default MainForm;