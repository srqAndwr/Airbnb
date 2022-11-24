import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * @Author: shiruiqiang
 * @Date: 2022-10-26 11:00:52
 * @LastEditTime: 2022-10-26 11:00:54
 * @LastEditors: shiruiqiang
 * @FilePath: useScrollTop.ts
 * @Description: 
 */
export const useScrollTop = () => {
    const location = useLocation();
	useEffect(() => {
		window.scroll(0, 0);
	}, [location.pathname]);
}
