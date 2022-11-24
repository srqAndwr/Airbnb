/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 14:40:37
 * @LastEditTime: 2022-11-12 22:35:12
 * @LastEditors: shiruiqiang
 * @FilePath: asyncThunk.ts
 * @Description: 
 */
import { getDiscount, getGoodPrice, getHighScore, getHotRecommend, getLongFor, getPlus } from '@/request/http';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeDiscount, changeGoodPrice, changeHighScore, changeHotRecommend, changeLongFor, changePlus } from './index';
export const fetchHomePrice = createAsyncThunk('fetchHomePrice',async ( payload , {dispatch} ) => {
    getGoodPrice().then(res => {
        dispatch(changeGoodPrice(res));
    });
    getHighScore().then(res => {
        dispatch(changeHighScore(res));
    });
    getHotRecommend().then(res => {
        dispatch(changeHotRecommend(res));
    });
    getPlus().then(res => {
        dispatch(changePlus(res));
    });
    getDiscount().then(res => {
        dispatch(changeDiscount(res));
    });
    getLongFor().then(res => {
        dispatch(changeLongFor(res));
    });
});