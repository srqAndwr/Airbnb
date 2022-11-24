/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 15:34:45
 * @LastEditTime: 2022-10-18 11:57:41
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";


export const HeaderWarpper = styled.div`
    display: flex;
    margin-bottom: 24px;
    .title-box{
        cursor: pointer;
        color: ${props => props.theme.text.primary};
        .title{
            font-size: 22px;
            margin: 0;
            padding: 0;
        }
        .subtitle{
            font-size: 16px;
            line-height: 24px;
            margin-top: 12px;
            font-weight: 400;
            margin-bottom: 8px;
        }
        &:hover + .arrow{
            opacity: 1;
        } 
    }
    .arrow{
        flex-shrink: 0;
        display: flex;
        align-items: center;
        opacity: 0;
        transition: opacity 0.2s ease-out 0s;
        padding-left: 16px;
        &:hover{
            opacity: 1;
            cursor: pointer;
        } 
    }
`;