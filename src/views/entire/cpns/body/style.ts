/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 11:42:36
 * @LastEditTime: 2022-10-29 10:02:30
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const EntireBodyWarrper = styled.div`
    position: relative;
    margin: 20px 24px 40px 24px;
    .header{
        margin-bottom: 8px;
        font-size: 22px;
        font-weight: 600;
    }
    .section{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;
    }
    > .cover{
        background-color: rgba(255,255,255,0.8);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
    }
`;