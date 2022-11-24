/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 11:47:02
 * @LastEditTime: 2022-10-19 15:32:22
 * @LastEditors: shiruiqiang
 * @FilePath: discount.ts
 * @Description: 
 */
import { roomInfo, addressInfo } from './common';

export interface discount{
    _id:string,
    type:string,
    title?:string,
    subtitle?: string,
    dest_address?:addressInfo[],
    dest_list?: {
        [propName:string]:roomInfo[]
    }
}