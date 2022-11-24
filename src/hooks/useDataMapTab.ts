/* eslint-disable react-hooks/exhaustive-deps */
import { addressInfo } from "@/model/types/common";
import { discount } from "@/model/types/discount";
import { hotRecommend } from "@/model/types/hotRecommend";
import { useCallback } from "react";

/*
 * @Author: shiruiqiang
 * @Date: 2022-10-19 21:32:03
 * @LastEditTime: 2022-10-19 21:45:06
 * @LastEditors: shiruiqiang
 * @FilePath: useDataMapTab.ts
 * @Description: 
 */
export const useDataMapTab = (dependent:discount | hotRecommend) => {
    return useCallback((list: addressInfo[] = []) => {
        return list.map((item) => item.name);
    }, [dependent])
};