/*
 * @Author: shiruiqiang
 * @Date: 2022-10-20 17:08:02
 * @LastEditTime: 2022-10-27 10:09:53
 * @LastEditors: shiruiqiang
 * @FilePath: index.ts
 * @Description: 
 */
import { createSlice } from '@reduxjs/toolkit';
import { roomInfo } from '../types/common';
interface EntireStateProps {
    roomList: roomInfo[] | undefined;
    totalCount: number;
    offset: number;
    size: number;
    isLoading: boolean;
}

const initialState: EntireStateProps = {
    roomList: undefined,
    totalCount: 0,
    offset: 0,
    size: 20,
    isLoading: false
}

const entireSlice = createSlice({
    name: 'entire',
    initialState,
    reducers: {
        changeRoomList: (store, { payload }) => {
            store.roomList = payload;
        },
        changeTotalCount: (store, { payload }) => {
            store.totalCount = payload;
        },
        changOffset: (store, { payload }) => {
            store.offset = payload;
        },
        changSize: (store, { payload }) => {
            store.size = payload;
        },
        changIsLoading: (store, { payload }) => {
            store.isLoading = payload;
        }
    }
});

export const { changeRoomList, changeTotalCount, changOffset, changSize, changIsLoading } = entireSlice.actions;
export const entireReducer = entireSlice.reducer;