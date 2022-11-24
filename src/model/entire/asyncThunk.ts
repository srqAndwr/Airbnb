/*
 * @Author: shiruiqiang
 * @Date: 2022-10-20 17:16:07
 * @LastEditTime: 2022-10-21 16:14:30
 * @LastEditors: shiruiqiang
 * @FilePath: asyncThunk.ts
 * @Description: 
 */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEntireList } from '@/request/http';
import { changeRoomList, changeTotalCount, changIsLoading } from '.';
import { RootState } from '..';

export const fetchEntireData = createAsyncThunk('fetchEntireData',
    async (payload, { getState, dispatch }) => {
        const entireState = (getState() as RootState).entire;
        dispatch(changIsLoading(true));
        const res = await getEntireList({ offset: entireState.offset, size: entireState.size });
        dispatch(changIsLoading(false));
        dispatch(changeRoomList(res.list));
        dispatch(changeTotalCount(res.totalCount));
});