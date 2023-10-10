import React from "react";
import FrontPage from "../Pages/FrontPage";
import s from "./Content.module.css";

const Content = ({t})=>{
    return(
        <div>
            <FrontPage t={t} />
        </div>
    )
}
export default Content;