/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 12:20:04
 * @LastEditTime: 2022-10-17 12:31:53
 * @LastEditors: shiruiqiang
 * @FilePath: longfor.ts
 * @Description: 
 */
export interface cityInfo{
    city?: string;
    price?: string;
    picture_url?: string;
    image_url?: string;
}

export interface longfor{
    _id: string;
    type: string;
    title: string;
    subtitle?: string;
    list: cityInfo[];
}