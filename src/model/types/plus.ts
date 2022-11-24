/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 12:20:04
 * @LastEditTime: 2022-10-17 12:22:30
 * @LastEditors: shiruiqiang
 * @FilePath: plus.ts
 * @Description: 
 */
import { roomInfo } from "./common";

export interface plus{
    _id: string;
    type: string;
    title: string;
    subtitle?: string;
    list: roomInfo[];
}