/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 16:29:01
 * @LastEditTime: 2022-10-17 18:39:17
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";


export const FooterWarpper = styled.div`
    background-color: #ffffff;
    border-top: 1px solid #EBEBEB;
    color: ${props => props.theme.text.secondary};
    .outer{
        padding: 48px 24px;
        margin: 0 auto;
        max-width: 1080px;
        background-color: transparent;
        footer{
            display: flex;
            flex-direction: column;
            .top{
                display: flex;
            }
            .bottom{
                display: flex;
                justify-content: space-between;
                border-top: 1px solid rgb(235, 235, 235);
                margin-top: 16px;
                padding-top: 16px;
                .left-info{
                    display: flex;
                    align-items: center;
                    .text-area{
                        margin-left: 8px;
                        font-weight: 500;
                        color: rgb(118,118,118);
                    }
                }
                .right-info{
                    display: flex;
                    > *{
                        padding: 0 8px;
                        box-sizing: content-box;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`;