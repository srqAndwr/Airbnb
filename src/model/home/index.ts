/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 14:36:59
 * @LastEditTime: 2022-11-12 22:34:08
 * @LastEditors: shiruiqiang
 * @FilePath: index.ts
 * @Description: 
 */
import { createSlice } from '@reduxjs/toolkit';
import { goodPrice } from 'model/types/goodPrice'
import { discount } from '../types/discount';
import { highScore } from '../types/highScore';
import { hotRecommend } from '../types/hotRecommend';
import { longfor } from '../types/longfor';
import { plus } from '../types/plus';
interface HomeStateProps {
    goodPrice: goodPrice | undefined;
    highScore: highScore | undefined;
    hotRecommend: hotRecommend | undefined;
    plus: plus | undefined;
    discount: discount | undefined;
    longFor: longfor | undefined;
}
const initialState: HomeStateProps = {
    goodPrice: undefined,
    highScore: undefined,
    hotRecommend: undefined,
    plus: undefined,
    discount: undefined,
    longFor:undefined
}
export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        changeGoodPrice: function (store,{ payload }) {
            store.goodPrice = payload;
        },
        changeHighScore: function (store, { payload }) {
            store.highScore = payload;
        },
        changeHotRecommend: function (store, { payload }) {
            store.hotRecommend = payload;
        },
        changePlus: function (store, { payload }) {
            store.plus = payload;
        },
        changeDiscount: function (store, { payload }) {
            store.discount = payload;
        },
        changeLongFor: function (store, { payload }) {
            store.longFor = payload;
        }
    }
});
export const { changeGoodPrice, changeHighScore, changeHotRecommend, changePlus, changeDiscount,changeLongFor } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;