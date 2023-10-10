import axios from "axios";

export async function apiResponce(obj, url){
    return await axios({
        url: url,
        method: "POST",
        header: {'application/x-www-form-urlencoded': 'application/json;charset=utf-8'},
        data: JSON.stringify(obj),
    })
    .then((data)=>{
        console.log("data: " , data.data);
        return data.data
    })
    .catch((error)=>{
        throw error
    })
}