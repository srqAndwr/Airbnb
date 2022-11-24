/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:56:57
 * @LastEditTime: 2022-11-05 20:30:02
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";
export const CenterWarpper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    .search-bar{
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        .input-box{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            width: 300px;
            height: 48px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 40px;
            box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
            transition: box-shadow 0.2s ease;
            ${props => props.theme.mixin.shadow}
            .search-placeholder{
                padding-left: 8px;
                font-weight: 500;
                color: ${props => props.theme.text.primary};
            }
            .search-btn{
                width: 32px;
                height: 32px;
                padding: 10px;
                margin-right: -9px;
                border-radius: 50%;
                color: #fff;
                background-color: ${props => props.theme.color.primary};
            }
        }
    }
    .search-detail{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform-origin: 50% 0;
        will-change: transform, opacity;
        .infos {
            position: absolute;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .detail-exit {
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .detail-exit-active {
        transition: all 250ms ease;
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter {
        transform: scale(0.35, 0.727273) translateY(-58px);
        opacity: 0;
    }

    .detail-enter-active {
        transform: scale(1.0) translateY(0);
        opacity: 1;
        transition: all 250ms ease;
    }

    .bar-enter {
        transform: scale(2.85714, 1.375) translateY(58px);
        opacity: 0;
    }

    .bar-enter-active {
        transition: all 250ms ease;
        transform: scale(1.0) translateY(0);
        opacity: 1;
    }

    .bar-exit {
        opacity: 0;
    }
`