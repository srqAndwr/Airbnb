/*
 * @Author: shiruiqiang
 * @Date: 2022-10-13 18:20:02
 * @LastEditTime: 2022-11-22 17:10:11
 * @LastEditors: shiruiqiang
 * @FilePath: http.ts
 * @Description: 
 */
import { discount } from '@/model/types/discount';
import { entire, entireRequest } from '@/model/types/entrie';
import { goodPrice } from '@/model/types/goodPrice';
import { highScore } from '@/model/types/highScore';
import { hotRecommend } from '@/model/types/hotRecommend';
import { longfor } from '@/model/types/longfor';
import { plus } from '@/model/types/plus';
import Request from './core'


import { BASE_URL, TIME_OUT } from './config'
const commonRequest = new Request({
    baseURL: BASE_URL,
    timeout: TIME_OUT
});

export const getDiscount = () => {
    return commonRequest.get<discount>({
        url: '/home/discount'
    });
}

export const getHotRecommend = () => {
    return commonRequest.get<hotRecommend>({
        url: '/home/hotrecommenddest'
    });
}

export const getHighScore = () => {
    return commonRequest.get<highScore>({
        url: '/home/highscore'
    });
}

export const getGoodPrice = () => {
    return commonRequest.get<goodPrice>({
        url: '/home/goodprice'
    });
}

export const getPlus = () => {
    return commonRequest.get<plus>({
        url: '/home/plus'
    })
}

export const getLongFor = () => {
    return commonRequest.get<longfor>({
        url: '/home/longfor'
    });
}

export const getEntireList = ({ offset = 0, size = 20 }: entireRequest) => {
    return commonRequest.get<entire>({
        url: '/entire/list',
        params: {
            offset,
            size
        }
    });
}