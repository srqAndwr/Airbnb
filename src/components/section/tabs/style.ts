/*
 * @Author: shiruiqiang
 * @Date: 2022-10-19 16:18:53
 * @LastEditTime: 2022-11-12 20:39:09
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const SectionTabsWarpper = styled.div`
    padding: 16px 8px;
    margin:0 -8px;
    overflow-x: visible;
    .item{
        margin-right: 16px;
        flex-basis: 120px;
        flex-shrink: 0;
        height: 48px;
        padding: 14px 16px;
        text-align: center;
        white-space: nowrap;
        border: 0.5px solid #d8d8d8;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0px 1px 2px rgb(0 0 0 / 15%);
        font-size: 17px;
        font-weight: bold;
        transition: box-shadow 0.5s;
        &:hover{
            ${props => props.theme.mixin.shadow}
        }
        &:last-of-type{
            margin-right: 0px;
        }
        
    }    
    .active{
        color: #fff;
        box-shadow: none !important;
        background-color: ${props => props.theme.color.secondary};
    }

`;