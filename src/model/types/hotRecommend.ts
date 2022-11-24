
/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 11:34:44
 * @LastEditTime: 2022-10-19 15:32:38
 * @LastEditors: shiruiqiang
 * @FilePath: hotRecommend.ts
 * @Description: 
 */
import { addressInfo, roomInfo } from "./common";

export interface hotRecommend{
    _id: string;
    type: string;
    title: string;
    subtitle?: string;
    dest_address?:addressInfo[],
    dest_list?: {
        [propName:string]:roomInfo[]
    }
}