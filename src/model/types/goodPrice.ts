/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 12:20:04
 * @LastEditTime: 2022-10-17 12:21:45
 * @LastEditors: shiruiqiang
 * @FilePath: goodPrice.ts
 * @Description: 
 */
import { roomInfo } from "./common";

export interface goodPrice{
    _id: string;
    type: string;
    title: string;
    subtitle?: string;
    list: roomInfo[];
}