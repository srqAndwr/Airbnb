/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 09:44:12
 * @LastEditTime: 2022-11-05 22:30:32
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const EntireTabsWarpper = styled.div<{
    isFixed: boolean;
}>` 
    display: flex;
    padding: 10px 16px;
    border-top: 1px solid #EBEBEB;
    border-bottom: 1px solid #EBEBEB;
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    top: 80px;
    z-index: 99;
    width: 100vw;
    background-color: #fff;
    position: ${props => props.isFixed ? 'fixed' : 'auto'};
    .item{
        padding: 6px 12px;
        margin: 0 4px 0 8px;
        border-radius: 4px;
        border: 1px solid #dce0e0;
        font-size: 14px;
        font-weight: 350;
        background-color: transparent;
        cursor: pointer;
    }
    .active{
        color: #fff;
        box-shadow: none !important;
        background-color: ${props => props.theme.color.secondary};
    }
`;