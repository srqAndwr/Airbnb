/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 12:20:04
 * @LastEditTime: 2022-10-17 12:31:43
 * @LastEditors: shiruiqiang
 * @FilePath: highScore.ts
 * @Description: 
 */
import { roomInfo } from "./common";

export interface highScore{
    _id: string;
    type: string;
    title: string;
    subtitle?: string;
    list: roomInfo[];
}