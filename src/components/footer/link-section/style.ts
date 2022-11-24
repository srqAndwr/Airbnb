/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 16:33:44
 * @LastEditTime: 2022-10-17 21:02:37
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const LinkSectionWarrper = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 0 8px;
    text-align: left;
    .title{
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-weight: 800;
        color: rgb(72,72,72);
    }
    ul{
       padding : 0;
       margin-top: 16px;
       color: #767676;
       li{
            display: flex;
            align-items: center;
            margin-bottom: 6px;
            .text{
                font-weight: 500;
                &:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            .extra{
                margin-left: 8px;
                border: 1px solid transparent;
                border-radius: 4px;
                padding: 1px 4px;
                background-color: rgb(0, 106, 112);
                color: #fff;
                font-size: 12px;
                font-weight: 600;
            }
       }
    }
`;