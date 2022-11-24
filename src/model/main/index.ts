/*
 * @Author: shiruiqiang
 * @Date: 2022-10-27 10:07:52
 * @LastEditTime: 2022-11-05 21:56:53
 * @LastEditors: shiruiqiang
 * @FilePath: index.ts
 * @Description: 
 */
import { createSlice } from "@reduxjs/toolkit";

interface MainStateProps{
    isFixed: boolean;
    isSetAlpha: boolean;
}

const initialState:MainStateProps = {
    isFixed: true,
    isSetAlpha: false
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changIsFixed: (store, { payload }) => {
            store.isFixed = payload;
        },
        changIsAlpha: (store, { payload }) => {
            store.isSetAlpha = payload;
        }
    }
});

export const { changIsFixed, changIsAlpha } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;