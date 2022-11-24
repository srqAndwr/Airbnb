/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 15:24:18
 * @LastEditTime: 2022-10-18 10:42:25
 * @LastEditors: shiruiqiang
 * @FilePath: storeHooks.ts
 * @Description: 
 */

import { AppDispatch, RootState } from "@/model"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector