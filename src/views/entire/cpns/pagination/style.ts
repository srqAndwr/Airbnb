/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 15:48:23
 * @LastEditTime: 2022-10-21 15:52:35
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const PaginationWarrper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root{
        margin: 0 8px;
        color: #222;
        font-size: 14px;
        font-weight: 600;
        &:hover{
            text-decoration: underline;
        }
    }
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected{
        background-color: #222;
        color: #fff;
    }
    .tip{
        margin-top: 16px;
        line-height: 18px;
        font-size: 14px;
        font-weight: 400;
        color: #222;
        font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;

    }
`;