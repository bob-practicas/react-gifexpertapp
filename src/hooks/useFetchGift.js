import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGits";


export const useFetchGift =(category)=>{

const [state, setstate] = useState({
    data: [],
    loading: true 
});


useEffect(()=>{

    setTimeout(() => {
        
        getGift(category)
        .then(img=>{
            setstate({
                data: img,
                loading: false
            })
        })
    }, 3000);
},[category])


return state;

}