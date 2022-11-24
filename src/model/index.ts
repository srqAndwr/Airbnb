/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 14:35:25
 * @LastEditTime: 2022-11-22 16:59:26
 * @LastEditors: shiruiqiang
 * @FilePath: index.ts
 * @Description: 
 */
import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from './home';
import { entireReducer } from './entire';
import { detailReducer } from './detail';
import { mainReducer } from './main';
export const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer,
        main: mainReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;