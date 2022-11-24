
/*
 * @Author: shiruiqiang
 * @Date: 2022-11-05 20:47:52
 * @LastEditTime: 2022-11-05 21:13:09
 * @LastEditors: shiruiqiang
 * @FilePath: useScrollPosition.ts
 * @Description: 
 */
import { useEffect, useState } from "react";
import {throttle} from 'underscore'
export const useScrollPosition = () => {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        const scrollExcutionFnc = throttle(function(){
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        }, 100);
        window.addEventListener('scroll', scrollExcutionFnc);
        return () => {
            window.removeEventListener('scroll',scrollExcutionFnc);
        }
    }, []);
    return {
        scrollX,
        scrollY
    }
};
