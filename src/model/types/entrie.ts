import { roomInfo } from "./common";

/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 12:26:27
 * @LastEditTime: 2022-10-17 12:30:25
 * @LastEditors: shiruiqiang
 * @FilePath: entrie.ts
 * @Description: ;
 */
export interface entireRequest{
    offset: number;
    size: number;
}
export interface entire{
    list: roomInfo[];
    errcode: number;
    totalCount: number;
}