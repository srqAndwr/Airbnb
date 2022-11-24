/*
 * @Author: shiruiqiang
 * @Date: 2022-10-19 21:12:08
 * @LastEditTime: 2022-10-19 21:27:38
 * @LastEditors: shiruiqiang
 * @FilePath: index.ts
 * @Description: 
 */
export const getObjIndexKey = (obj:any = {},index:number) => {
    return Object.keys(obj)[index];
}

export const getObjIndexValue = (obj:any = {},index:number) => {
    return obj[Object.keys(obj)[index]];
}

export const isEmptyObj = (obj: any = {}) => {
    return Object.keys(obj).length;
}