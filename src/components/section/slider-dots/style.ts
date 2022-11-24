/*
 * @Author: shiruiqiang
 * @Date: 2022-10-22 11:04:14
 * @LastEditTime: 2022-11-12 19:55:37
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const SliderDotsWapper = styled.div`
    width: 100%;
    overflow: hidden;
    .dots{
        position: relative;
        display: flex;
        transition: transform 200ms ease;
        > * {
            flex-shrink: 0;
        }
    }
`;