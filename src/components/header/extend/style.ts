/*
 * @Author: shiruiqiang
 * @Date: 2022-10-31 10:52:38
 * @LastEditTime: 2022-11-05 22:20:35
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const HeaderExtendWarpper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    > .section{
        display: flex;
        align-items: center;
        border: 1px solid #DDDDDD;
        border-radius: 32px;
        height: 66px;
        width: 850px;
        background-color: #fff;
        .item{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            padding: 14px 32px;
            border-radius: 32px;
            cursor: pointer;
            height: 100%;
            .title{
                padding-bottom: 4px;
                font-size: 12px;
                font-weight: 500;
            }
            .desc{
                font-size: 14px;
                font-weight: 400;
                color: #717171;
            }
            .search {
                position: absolute;
                right: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48px;
                height: 48px;
                background-color: #ff385c;
                color: #fff;
                border-radius: 100%;
                font-size: 20px;
                transition: 200ms background-color ease;
                &:hover{
                    background-color: #E41C5C;
                }
            }
        }
        .item:hover{
            background-color: #ebebeb;
        }
        .split{
            display: flex;
            align-items: center;
            border-right: 1px solid #DDDDDD;
            height: 32px;
            width: 1px;
        }
    }
`;